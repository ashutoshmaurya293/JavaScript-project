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
  main.innerHTML = ` <div class="singleImage">
<div id="image">
  <img
    src=${result.image}
    alt=""
  />
</div>
<div class="buttons">
  <button class="addCartButton" onclick = "addToCart(${result.id})"><i class="fa-solid fa-cart-shopping"></i><span class="addCartp"> Add to Cart</span></button>
  <button class="buyNowButton">Buy Now</button>
</div>
</div>
<div class="singleConetnt">
<div class="top">
  <p class="title">
  ${result.title}
  </p>
  <p class="price">₹${Math.floor(result.price*8)}</p>
  <p class="rating">
    ${result.rating.rate}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      class="w-6 h-6"
    >
      <path
        fill-rule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
        clip-rule="evenodd"
      />
    </svg>
    <span class="ratingContent">20143 Ratings, ${result.rating.count} Reviews </span>
  </p>
  <p class="delivery">free delivery</p>
</div>
<div class="down">
  <div class="description">
    <span class="descriptionHeading">Description :</span
    ><p class="descriptionContent"
      >${result.description}</p
    >
  </div>
  <div class="category">
    <span class="categoryHeading">Category :</span
    ><p class="categoryContent">${result.category}</p>
  </div>
</div>
</div>`;
};
api();
