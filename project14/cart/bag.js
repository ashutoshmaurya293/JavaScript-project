let bagItemObjects;
let containerElement = document.querySelector(".bag-items-container");
displayBagSummary();
function displayBagSummary() {
  let bagSummaryElement = document.querySelector(".bag-summary");
  let totalItem = bagItems.length;
  let totalMRP = 0;
  let totalDiscount = 0;

  bagSummaryElement.innerHTML = `
    <div class="bag-details-container">
    <div class="price-header">PRICE DETAILS (${totalItem} Items) </div>
    <div class="price-item">
      <span class="price-item-tag">Total MRP</span>
      <span class="price-item-value">₹${totalMRP}</span>
    </div>
    <div class="price-item">
      <span class="price-item-tag">Discount on MRP</span>
      <span class="price-item-value priceDetail-base-discount">-₹${totalDiscount}</span>
    </div>
    <div class="price-item">
      <span class="price-item-tag">Convenience Fee</span>
      <span class="price-item-value">₹99</span>
    </div>
    <hr>
    <div class="price-footer">
      <span class="price-item-tag">Total Amount</span>
      <span class="price-item-value">₹{finalPayment}</span>
    </div>
  </div>
  <button class="btn-place-order">
    <div class="css-xjhrni">PLACE ORDER</div>
  </button>
  `;
}
function loadBagItemObjects() {
  // console.log(bagItems);
  const api = async () => {
    const url = "https://fakestoreapi.com/products";
    const result = await fetch(url).then((res) => res.json());
    //   console.log(result);
    let bagItemObjects = bagItems.map((bid) => {
      for (let i = 0; i < result.length; i++) {
        if (bid === result[i].id) {
          return result[i];
        }
      }
    });

    function displayBagItems() {
      let containerElement = document.querySelector(".bag-items-container");
      let innerHTML = "";
      console.log(bagItemObjects);
      bagItemObjects.forEach((bagItem) => {
        innerHTML += generateItemHTML(bagItem);
      });
      containerElement.innerHTML = innerHTML;
    }

    function generateItemHTML(item) {
      return `<div class="bag-item-container">
      <div class="item-left-part">
        <img class="bag-item-img" src="${item?.image}">
      </div>
      <div class="item-right-part">
        <div class="company"></div>
        <div class="item-name">${item?.title}</div>
        <div class="price-container">
          <span class="current-price">Rs ${item?.price}</span>
          <span class="original-price">Rs ${item?.price}</span>
          <span class="discount-percentage">(% OFF)</span>
        </div>
        <div class="return-period">
          <span class="return-period-days">days</span> return available
        </div>
        <div class="delivery-details">
          Delivery by
          <span class="delivery-details-days"></span>
        </div>
      </div>
  
      <div class="remove-from-cart" onclick="removeFromBag(${item.id})">X</div>
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
  displayBagSummary();
}
