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
    <span class="rating">
    ${result.rating.rate}
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
  </svg>
    <span class="ratingContent">20143 Ratings, ${result.rating.count} Reviews </span>
  </span>
  <span class="delivery">free delivery</span>
    <h1>₹${Math.floor(result.price*8)}</h1>
    <p>${result.description}</p>
    <button onclick = "addToCart(${result.id})">Add to Cart</button>
    <button>Wishlist</button>
  </div>
</div>`;
};
api();
