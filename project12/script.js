const AccesKey = "MReg00ZXxoRekpUkEdz7oeNd40XyF4FHo5Hog-KD5X8";
let searchInput = document.getElementById("searchInput");
let button = document.getElementById("btn");
let showData = document.getElementById("showData");
let moreBTN = document.getElementById("moreBTN");
let page = 2;

const getData = async (searchInputValue, pageNo) => {
  try {
    let fech = await fetch(
      `https://api.unsplash.com/search/photos?query=${searchInputValue}&per_page=28&page=${pageNo}&client_id=${AccesKey}`
    );
    let jsonData = await fech.json();
    if (searchInput.value == "") {
      showData.innerHTML = `
      <h1>pleace search something....</h1>
      `;
      document.querySelector(".more").style.display = "none";
    } else {
      document.querySelector(".more").style.display = "block";
    }
    jsonData.results.map((e) => {
      console.log(e);
      let div = document.createElement("div");
      div.classList.add("card");
      showData.appendChild(div);
      div.innerHTML = `
      <img src=${e.urls.small_s3} alt="image">
<a href=${e.links.html} target = _blank><p>${e.alt_description}</p></a>
      `;
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

function startLoading() {
  var button = document.getElementById("btn");
  button.classList.add("loading");
  setTimeout(function () {
    showData.innerHTML = "";
    const searchInputValue = searchInput.value;
    getData(searchInputValue);
    button.classList.remove("loading");
  }, 1000);
}

function Loading() {
  var button = document.getElementById("moreBtn");
  button.classList.add("moreLoading");
  setTimeout(() => {
    const searchInputValue = searchInput.value;
    getData(searchInputValue, page++);
    button.classList.remove("moreLoading");
  }, 1000);
}
