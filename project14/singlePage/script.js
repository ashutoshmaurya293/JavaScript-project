// console.log(singleItem);
let main = document.getElementById("main");

const api = async () => {
  const loader = document.getElementById("loadingDiv")

  const url = `https://fakestoreapi.com/products/${singleItem}`;
  const result = await fetch(url).then((res) => res.json());
  // console.log(result);
  if(!loader)return
  else{
    loader.style.display="none"
  }

  if (!main) return;
  main.innerHTML = ` <div class="card">
  <div class="photo">
    <img src="${result.image}"
    alt="">
  </div>
  <div class="description">
    <h2>${result.title}</h2>
    <h4>${result.category}</h4>
    <p class="rating">
    ${result.rating.rate}

    
    </svg>
    <span class="ratingContent">20143 Ratings, ${result.rating.count} Reviews </span>
  </p>
  <p class="delivery">free delivery</p>
    <h1>₹${Math.floor(result.price*8)}</h1>
    <p>${result.description}</p>
    <button onclick = "addToCart(${result.id})">Add to Cart</button>
    <button>Wishlist</button>
  </div>
</div>`;
};
api();
