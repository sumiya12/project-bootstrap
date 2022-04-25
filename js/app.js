let func = (arr, c) => {
  let html = document.querySelector(c);
  for (let i = 0; i < arr.length; i++) {
    let foods = `<div class="col">
          <div class="card">
  <img
    src="${arr[i].image}"
    alt="Avatar"
    style="width: 100%" class="p-3"
  />
  <span class="salespan">${arr[i].isdiscount}%</span>
  <div class="container">
    <h4><b>${arr[i].title}</b></h4>
    <div class="price d-flex ms-1">
      <p id="sl-pr" class="">${arr[i].price}₮</p>
      <p class="main-pr ms-2">${arr[i].price}₮</p>
    </div>
  </div>
  <div class="card-hover">
    <button
      type="button"
      class="btn"
      data-bs-toggle="modal"
      data-bs-target="#myModal"
    >
      <img src="/pictures/pics/Frame 440.svg" alt="" class=" " />
    </button>
  </div>
  <!-- The Modal -->
  <div class="modal" id="myModal"><div class="modal-dialog">
  <div class="modal-content">
    <div class="btn-cl me-2 mt-2">
      <button
        type="button"
        class="btn-close flex-end"
        data-bs-dismiss="modal"
      ></button>
    </div>
    
  </div>
</div>
  </div>
  </div>
  </div>
`;
    html.innerHTML += foods;
    // console.log(html);
  }
};
const title = [
  { title: "Хямдралтай", seeAll: "Бүгдийг харах" },
  { title: "Үндсэн хоол", seeAll: "Бүгдийг харах" },
  { title: "Салад ба зууш", seeAll: "Бүгдийг харах" },
  { title: "Амттан", seeAll: "Бүгдийг харах" },
];
const xhrFood = new XMLHttpRequest();
xhrFood.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    const datas = JSON.parse(this.responseText);
    const isdiscount = datas.filter((card) => card.isdiscount > 0);
    const mainDish = datas.filter((card) => card.category == "Үндсэн хоол");
    const salad = datas.filter((card) => card.category == "Салад ба зууш");
    const dessert = datas.filter((card) => card.category == "Амттан");
    func(isdiscount, ".row");
    func(mainDish, ".row");
  }
};
xhrFood.open("GET", "/data.json", true);
xhrFood.send();

const seeall = document.querySelectorAll(".container-sale");
for (let i = 0; i < seeall.length; i++) {
  seeall[
    i
  ].innerHTML += `<div class="sales-title d-flex justify-content-between mx-5">
<div class="sales d-flex">
  <span></span>
  <h3>${title[i].title}</h3>
</div>
<div class="see-all">
  <div class="d-flex d-md-none"></div>
  <input type="button" value="${title[i].seeAll}" class="d-none d-md-flex" />
</div>
</div>`;
}

// const cardHtml = document.querySelectorAll(".card");
// for (let i = 0; i < cardHtml.length; i++) {
//   cardHtml[i].innerHTML += ;
// }
// const remSpan = document.querySelectorAll(".salespan");
// const mainPr = document.querySelectorAll(".main-pr");
// const func = (e) => {
//   x = cardObj;
//   for (i = 0; i < e.length; i++) {
//     if (x[i].discount !== "") {
//       mainPr[i].className = "main-pr";
//       remSpan[i].innerText = "20%";
//     } else {
//       mainPr[i].className = "price";
//       remSpan[i].parentNode.removeChild(remSpan[i]);
//     }
//   }
// };
// func(mainPr);
// func(remSpan);
