const AccesKey = 'MReg00ZXxoRekpUkEdz7oeNd40XyF4FHo5Hog-KD5X8'

const getData = async () => {
  try {
    let fech = await fetch(
      `https://api.unsplash.com/search/photos?query=dog&per_page=28&page=1&client_id=${AccesKey}`
    );
    let jsonData = await fech.json();
    console.log(jsonData);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

getData();
