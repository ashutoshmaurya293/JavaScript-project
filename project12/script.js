const AccesKey = "HXu4G3KUQYPiOHNF4RR3k9z9wF528bvq4tDLbpu1nQg";
let searchInput = document.getElementById("searchInput");
let button = document.getElementById("btn");
let showData = document.getElementById("showData");
let moreBTN = document.getElementById("moreBTN");
let loader = document.querySelector(".loader");
let page = 2;

loader.style.display = "none";
const getData = async (searchInputValue, pageNo) => {
  try {
    let fech = await fetch(
      `https://api.unsplash.com/search/photos?query=${searchInputValue}&per_page=28&page=${pageNo}&client_id=${AccesKey}`
    );
    let jsonData = await fech.json();
    loader.style.display = "none";

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
  loader.style.display = "inline";
  showData.innerHTML = "";
  const searchInputValue = searchInput.value;
  getData(searchInputValue);
}

function Loading() {
  const searchInputValue = searchInput.value;
  getData(searchInputValue, page++);
}
