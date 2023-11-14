//declare DOM variables
const searchFormNav = document.getElementById("search-form-nav");
const searchForm = document.getElementById("search-form");
const navBar = document.getElementById("nav-bar");
const searchBar = document.getElementById("search-bar");
const searchBarNav = document.getElementById("search-bar-nav");
const searchIcon = document.getElementById('search-icon');
const backgroundContainer = document.getElementById("background-container");


// Initial Request for homepage with curated collection
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var data = JSON.parse(xhttp.responseText);
    var photoData = data.photos;
    console.log(data);
    const photoContainer = document.getElementById("photo-container");
    photoContainer.innerHTML = "";
    photoData.forEach((photo) => {
      const photoDiv = document.createElement("div");
      photoDiv.setAttribute("class", "photo-div");
      photoDiv.innerHTML = `<a href="${photo.url}"><img src="${photo.src.large2x}"></a><a href="${photo.photographer_url}"><p class="photo-info">Photographer: ${photo.photographer}</p></a>`;
      photoContainer.appendChild(photoDiv);
    });
  }
};
xhttp.open("GET", `https://api.pexels.com/v1/curated?per_page=20`, true);
xhttp.setRequestHeader(
  "Authorization",
  "563492ad6f91700001000001ee3283546cb24ac4828ae30602924125"
);
xhttp.send();

//eventlistener for sticky nav bar
window.addEventListener("scroll", function () {
  if (window.scrollY > 340) {
    navBar.classList.add("white");
    searchBarNav.classList.remove("hide");
    searchIcon.classList.remove('hide');
  } else if (window.scrollY < 280) {
    navBar.classList.remove("white");
    searchBarNav.classList.add("hide");
    searchIcon.classList.add('hide');
  }
});

// eventlisteners for both search bars
searchForm.addEventListener("submit", renderData);
searchFormNav.addEventListener("submit", renderDataNav);

//function for main search bar
function renderData(e) {
  e.preventDefault();
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(xhttp.responseText);
      var photoData = data.photos;
      const photoContainer = document.getElementById("photo-container");
      photoContainer.innerHTML = "";
      photoData.forEach((photo) => {
        const photoDiv = document.createElement("div");
        photoDiv.setAttribute("class", "photo-div");
        photoDiv.innerHTML = `<a href="${photo.url}"><img src="${photo.src.large2x}"></a><a href="${photo.photographer_url}"><p class="photo-info">Photographer: ${photo.photographer}</p></a>`;
        photoContainer.appendChild(photoDiv);
      });
    }
  };
  var searchValue = document.getElementById("search-bar").value;
  xhttp.open(
    "GET",
    `https://api.pexels.com/v1/search?query=${searchValue}&page=2&per_page=20`,
    true
  );
  xhttp.setRequestHeader(
    "Authorization",
    "563492ad6f91700001000001ee3283546cb24ac4828ae30602924125"
  );
  xhttp.send();
  //reset input text after submitting
  searchBar.value = "";
}

//function for nav bar search bar
function renderDataNav(e) {
  e.preventDefault();
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(xhttp.responseText);
      var photoData = data.photos;
      const photoContainer = document.getElementById("photo-container");
      photoContainer.innerHTML = "";
      photoData.forEach((photo) => {
        const photoDiv = document.createElement("div");
        photoDiv.setAttribute("class", "photo-div");
        photoDiv.innerHTML = `<a href="${photo.url}"><img src="${photo.src.large2x}"></a><a href="${photo.photographer_url}"><p class="photo-info">Photographer: ${photo.photographer}</p></a>`;
        photoContainer.appendChild(photoDiv);
      });
    }
  };
  var searchValueNav = document.getElementById("search-bar-nav").value;
  xhttp.open(
    "GET",
    `https://api.pexels.com/v1/search?query=${searchValueNav}&page=2&per_page=20`,
    true
  );
  xhttp.setRequestHeader(
    "Authorization",
    "563492ad6f91700001000001ee3283546cb24ac4828ae30602924125"
  );
  xhttp.send();
  //reset input text after submitting
  searchBarNav.value = "";
}
