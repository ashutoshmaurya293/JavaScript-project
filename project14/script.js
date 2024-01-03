const icon = document.querySelector(".icon");
const backdrop = document.querySelector(".backdrop");
const mainDrower = document.querySelector(".mainDrower");
// const menu = document.querySelector(".icon");
const hellow = document.querySelector("#hellow");
let Icon = true;

function change() {
  if (Icon) {
    hellow.className = "fa-solid fa-xmark";
    Icon = !Icon;
    mainDrower.style.visibility = "visible";
    backdrop.style.visibility = "visible";
  } else {
    mainDrower.style.visibility = "hidden";
    backdrop.style.visibility = "hidden";
    hellow.className = "fa-solid fa-bars";
    Icon = !Icon;
  }
}
icon.addEventListener("click", change);
backdrop.addEventListener("click", change);
let bagItems
let bagLength = document.querySelector(".bagLength")
let bagLengthMobile = document.querySelector(".bagLengthMobile")
load()
function load(){
  let bagItemStr = localStorage.getItem("bagItems")
  bagItems = bagItemStr ? JSON.parse(bagItemStr):[]
  loadHomnePage()
  bagIcon()

}

function bagIcon(){
  bagLength.innerHTML = bagItems.length
  bagLengthMobile.innerHTML = bagItems.length

}

function addToCart(id){
  bagItems.push(id)
  localStorage.setItem("bagItems",JSON.stringify(bagItems))
  console.log(bagItems);
  bagIcon()

}

function loadHomnePage(){
const api = async () => {
  const url = "https://fakestoreapi.com/products";
  try {
    const result = await fetch(url).then((res) => res.json());
    // console.log(result);
    const fullCart = document.querySelector(".fullCart");
    if(!fullCart)return
    let innerHTML = "";
    result.forEach((e) => {
      innerHTML += `
  <div class="cart">
  <div class="cartImg">
    <img
      src=${e?.image}
      alt=""
    />
  </div>
  <div class="element">
    <p class="name">${e?.title}</p>
    <p>
      <span class="price">₹${Math.floor(e?.price * 8)}</span>
      <span class="price-c">overwords</span>
    </p>
    <p class="delivery">Free Delivery</p>
    <button onclick="addToCart(${e.id})">Add To Cart</button>
  </div>
  </div>
  `;
    });
    fullCart.innerHTML = innerHTML;
  } catch (error) {
    console.log(error);
  }
};
api();

}