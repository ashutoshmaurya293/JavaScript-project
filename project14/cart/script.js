let bagItemObjects;
let totalPrice;
let containerElement = document.querySelector(".bag-items-container");

function loadBagItemObjects() {
  let iconQtyStr = localStorage.getItem("iconQty");
  iconQty = iconQtyStr ? JSON.parse(iconQtyStr) : [];
  let bagItemStr = localStorage.getItem("bagItems");
  bagItems = bagItemStr ? JSON.parse(bagItemStr) : [];
  // console.log(bagItems);
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
    function displayBagSummary(price) {
      let bagSummaryElement = document.querySelector(".bag-summary");
      const sum = iconQty.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      );
      let Convenience = 0;
      if (sum > 0) {
        Convenience = 99;
      }
      let totalMRP = 0;
      let totalDiscount = 0;
      // console.log(bagItems);
      bagItemObjects.forEach((bagItem) => {
        if (bagItem?.price !== undefined) {
          bagItems.map((e) => {
            if (e.id == bagItem.id) {
              totalMRP += bagItem?.price * 8 * e.qty;
            }
          });
          totalDiscount += (totalMRP * 10) / 100;
        }
      });
      let mrp = Math.floor(totalMRP);
      let finalPayment = totalMRP - totalDiscount + Convenience;
      bagSummaryElement.innerHTML = `
    <div class="bag-details-container">
    <div class="price-header">PRICE DETAILS (${sum} Items) </div>
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
      bagItems.map((e) => {
        if (e.id !== item.id) return;
        if (e.id == item.id) {
          qty = e.qty;
        }
      });
      totalPrice = Math.floor(item?.price * 8) * qty;
      displayBagSummary(totalPrice);
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
        <button onclick = "dec(${item.id})" class = "qtyButton">-</button>
        <span class = "qty">${qty}</span>
        <button onclick = "inc(${item.id})" class = "qtyButton">+</button>
        <div><span class="return-period-days">Total price</span>₹ ${totalPrice}</div>
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
function inc(itemId) {
  bagItems.map((e) => {
    if (e.id == undefined) return;
    if (e.id == itemId) {
      console.log(e.qty);
      e.qty += 1;
      localStorage.setItem("bagItems", JSON.stringify(bagItems));
      console.log(e.qty);
      loadBagItemObjects();
    }
  });
}
function dec(itemId) {
  bagItems.map((e) => {
    if (e.id == undefined) return;
    if (e.id == itemId) {
      console.log(e.qty);
      if (e.qty == 1) return;
      e.qty -= 1;
      localStorage.setItem("bagItems", JSON.stringify(bagItems));
      loadBagItemObjects();
    }
  });
}

function removeFromBag(itemId) {
  iconQty.pop();
  localStorage.setItem("iconQty", JSON.stringify(iconQty));
  bagItems = bagItems.filter((bagItemId) => bagItemId != itemId);
  localStorage.setItem("bagItems", JSON.stringify(bagItems));
  loadBagItemObjects();
  bagIcon();
}
