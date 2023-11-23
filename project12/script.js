const AccesKey = 'MReg00ZXxoRekpUkEdz7oeNd40XyF4FHo5Hog-KD5X8'
let searchInput = document.getElementById("searchInput")
let button = document.getElementById("btn")


const getData = async (searchValue) => {
  try {
    let fech = await fetch(
      `https://api.unsplash.com/search/photos?query=${searchValue}&per_page=28&page=1&client_id=${AccesKey}`
    );
    let jsonData = await fech.json();
    // console.log(jsonData.results);
    console.log(searchValue);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

// getData();

button.addEventListener("click", function(){
    let searchValue = searchInput.value
    getData(searchInput)
})