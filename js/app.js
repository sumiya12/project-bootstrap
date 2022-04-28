const func = (arr, c) => {
  let html = document.querySelector(c);
  arr.map((i) => {
    let foods = `<div class="col">
          <div class="card">
  <img
    src="${i.image}"
    alt="Avatar"
    style="width: 100%" class="p-3"
  />
  <span class="salespan">${i.isdiscount}%</span>
  <div class="container">
    <h4><b>${i.title}</b></h4>
    <div class="price d-flex ms-1">
      <p id="sl-pr" class="">${i.price}₮</p>
      <p class="main-pr ms-2">${i.price}₮</p>
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
  });
};

const xhrFood = new XMLHttpRequest();
xhrFood.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    const datas = JSON.parse(this.responseText);
    const isdiscount = datas.filter((card) => card.isdiscount > 0);
    const mainDish = datas.filter((card) => card.category == "Үндсэн хоол");
    const salad = datas.filter((card) => card.category == "Салад ба зууш");
    const dessert = datas.filter((card) => card.category == "Амттан");
    func(isdiscount, ".sales");
    func(mainDish, ".mainDish");
    func(salad, ".salad1");
    func(dessert, ".dessert");
  }
};
xhrFood.open("GET", "/data.json", true);
xhrFood.send();

const sale = new XMLHttpRequest();
sale.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    const datas = JSON.parse(this.responseText);
    const isdiscount = datas.filter((card) => card.title == "Хямдралтай");
    const mainDish = datas.filter((card) => card.title == "Үндсэн хоол");
    const salad = datas.filter((card) => card.title == "Салад ба зууш");
    const dessert = datas.filter((card) => card.title == "Амттан");
    title(isdiscount, ".hymdraltai");
    title(mainDish, ".mainhool");
    title(salad, ".salad");
    title(dessert, ".amttan");
  }
};
sale.open("GET", "/sale.json", true);
sale.send();

const title = (arr, c) => {
  const seeall = document.querySelector(c);
  arr.map((i) => {
    let tit = `<div class="sales-title d-flex justify-content-between mx-5">
<div class="sales d-flex">
  <span></span>
  <h3>${i.title}</h3>
</div>
<div class="see-all">
  <div class="d-flex d-md-none"></div>
  <input type="button" value="${i.seeAll}" class="d-none d-md-flex" />
</div>
</div>`;
    seeall.innerHTML += tit;
  });
};
