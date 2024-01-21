let bagItemObjects;
let containerElement = document.querySelector(".bag-items-container");

function loadBagItemObjects() {
  console.log(bagItems);
  const api = async () => {
    const loader = document.getElementById("loadingDiv");
    if (!loader) return;
    loader.style.display = "block";
    const url = "https://fakestoreapi.com/products";
    const result = await fetch(url).then((res) => res.json());
    loader.style.display = "none";

    //   console.log(result);
    let bagItemObjects = bagItems.map((bid) => {
      for (let i = 0; i < result.length; i++) {
        if (bid === result[i].id) {
          return result[i];
        }
      }
    });
    displayBagSummary();
    function displayBagSummary() {
      let bagSummaryElement = document.querySelector(".bag-summary");
      let totalItem = bagItems.length;
      let Convenience = 0;
      if (totalItem > 0) {
        Convenience = 99;
      }
      let totalMRP = 0;
      let totalDiscount = 0;
      bagItemObjects.forEach((bagItem) => {
        totalMRP += bagItem?.price * 8;
        totalDiscount += (totalMRP * 10) / 100;
      });
      let mrp = Math.floor(totalMRP);
      let finalPayment = totalMRP - totalDiscount + Convenience;
      bagSummaryElement.innerHTML = `
    <div class="bag-details-container">
    <div class="price-header">PRICE DETAILS (${totalItem} Items) </div>
    <div class="price-item">
      <span class="price-item-tag">Total MRP</span>
      <span class="price-item-value">₹${mrp}</span>
    </div>
    <div class="price-item">
      <span class="price-item-tag">Discount on MRP</span>
      <span class="price-item-value priceDetail-base-discount">-₹${Math.floor(
        totalDiscount
      )}</span>
    </div>
    <div class="price-item">
      <span class="price-item-tag">Convenience Fee</span>
      <span class="price-item-value">₹${Convenience}</span>
    </div>
    <hr>
    <div class="price-footer">
      <span class="price-item-tag">Total Amount</span>
      <span class="price-item-value">₹${Math.floor(finalPayment)}</span>
    </div>
  </div>
  <button class="btn-place-order">
    <div class="css-xjhrni">PLACE ORDER</div>
  </button>
  `;
    }

    function displayBagItems() {
      let containerElement = document.querySelector(".bag-items-container");

      let innerHTML = "";
      // console.log(bagItemObjects);
      bagItemObjects.forEach((bagItem) => {
        if (!bagItem?.title) return;
        else {
          innerHTML += generateItemHTML(bagItem);
        }
      });
      containerElement.innerHTML = innerHTML;
    }

    function generateItemHTML(item) {
      let qty;
      bagItems.map((e)=>{
        if(e.id !== item.id)return
        if(e.id == item.id){
          qty = e.qty
        }
      })
      const today = new Date();
      const date =
        today.getDate() +
        7 +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getFullYear();
      return `<div class="bag-item-container">
      <div class="item-left-part">
      <a href="../singlePage/index.html"><img class="bag-item-img" src="${
        item?.image
      }" onclick="singleCart(${item.id})"></a>
      </div>
      <div class="item-right-part">
        <div class="company"></div>
        <div class="item-name">${item?.title}</div>
        <div class="price-container">

          <span class="original-price"><b>₹</b>${Math.floor(
            item?.price * 8
          )}</span>
          <span class="discount-percentage">(7% OFF)</span>
        </div>
        <div class="return-period">
          <span class="return-period-days">7 days</span> return available
        </div>
        <div class="delivery-details">
          Delivery by
          <span class="delivery-details-days">${date}</span>
        </div>
        <div >
        <div>${qty}</div>
        </div>
        </div>
  
      <div class="remove-from-cart" onclick="removeFromBag(${
        item?.id
      })"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
    </div>
    </div>`;
    }
    displayBagItems();
  };
  api();
}
loadBagItemObjects();

function removeFromBag(itemId) {
  bagItems = bagItems.filter((bagItemId) => bagItemId != itemId);
  localStorage.setItem("bagItems", JSON.stringify(bagItems));
  loadBagItemObjects();
  bagIcon();
}
