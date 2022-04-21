const cardObj = [
  {
    title: "Зайрмаг",
    image: "pictures/pics/icecream.svg",
    price: "6,800₮",
    discount: "4,760₮",
    category: "Хямдралтай",
  },
  {
    title: "Панкейк",
    image: "/pictures/pics/pancake.svg",
    price: "6,800₮",
    discount: "4,800₮",
    category: "Хямдралтай",
  },
  {
    title: "Өглөөний хоол",
    image: "/pictures/pics/ugluunii hool.svg",
    price: "6,800₮",
    discount: "4,800₮",
    category: "Хямдралтай",
  },
  {
    title: "Банана сендвич",
    image: "/pictures/pics/banana.svg",
    price: "6,800₮",
    discount: "4,800₮",
    category: "Хямдралтай",
  },
  {
    title: "Салмон загас",
    image: "/pictures/pics/salmon.svg",
    price: "11,800₮",
    category: "Үндсэн хоол",
  },
  {
    title: "Бөөрөнхий мах",
    image: "/pictures/pics/buurunhii mah.svg",
    price: "14,000₮",
    category: "Үндсэн хоол",
  },
  {
    title: "Самрын нухаш",
    image: "/pictures/pics/samriin nuhash.svg",
    price: "9,800₮",
    category: "Үндсэн хоол",
  },
  {
    title: "Чикен бургер",
    image: "/pictures/pics/burger.svg",
    price: "14,000₮",
    category: "Үндсэн хоол",
  },
  {
    title: "Детокс салад",
    image: "/pictures/pics/detocks.svg",
    price: "6,800₮",
    category: "Салад ба зууш",
  },
  {
    title: "Кобб салад",
    image: "/pictures/pics/kobb.svg",
    price: "6,800₮",
    category: "Салад ба зууш",
  },
  {
    title: "Авокадо салад",
    image: "/pictures/pics/avacode.svg",
    price: "6,800₮",
    category: "Салад ба зууш",
  },
  {
    title: "Сендвич",
    image: "/pictures/pics/sendvich.svg",
    price: "4,800₮",
    category: "Салад ба зууш",
  },
  {
    title: "Донатс",
    image: "/pictures/pics/donate.svg",
    price: "5,800₮",
    category: "Амттан",
  },
  {
    title: "Орео дессерт",
    image: "/pictures/pics/oreo.svg",
    price: "7,800₮",
    category: "Амттан",
  },
  {
    title: "Вафли",
    image: "/pictures/pics/vafli.svg",
    price: "5,800₮",
    category: "Амттан",
  },
  {
    title: "Макарон",
    image: "/pictures/pics/makaron.svg",
    price: "3,800₮",
    category: "Амттан",
  },
];

const cardHtml = document.querySelectorAll(".card");

for (let i = 0; i < cardHtml.length; i++) {
  cardHtml[i].innerHTML += `
            <img
              src="${cardObj[i].image}"
              alt="Avatar"
              style="width: 100%"
            />
            <span>20%</span>
            <div class="container">
              <h4><b>${cardObj[i].title}</b></h4>
              <div class="price d-flex ms-1">
                <p id="sl-pr" class="">${cardObj[i].discount}</p>
                <p class="main-pr ms-2">${cardObj[i].price}</p>
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
            <div class="modal" id="myModal">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="btn-cl me-2 mt-2">
                    <button
                      type="button"
                      class="btn-close flex-end"
                      data-bs-dismiss="modal"
                    ></button>
                  </div>
                  <!-- Modal body -->
                  <div class="modal-body d-lg-flex d-block">
                    <div>
                      <img
                        src="/pictures/pics/modal-web.svg"
                        alt=""
                        class="d-none d-lg-flex"
                      />
                      <img
                        src="/pictures/pics/modal-tablet.svg"
                        alt=""
                        class="d-flex d-lg-none"
                      />
                    </div>
                    <div class="describe-food m-lg-3">
                      <div class="title d-flex justify-content-between my-3">
                        <div class="name">Хулууны зутан</div>
                        <div class="price">6,800₮</div>
                      </div>
                      <div class="my-2">
                        <div class="ingredieants">Орц</div>
                        <p class="ingredieants-title">
                          Салмон загас, чинжүү, төмс, лууван , сонгино, цөцгийн
                          тос, самрын үр
                        </p>
                      </div>
                      <div class="qnt">
                        <div class="d-block d-lg-none">
                          <div class="title">Хэмжээ</div>
                          <div class="qnt-unit d-flex justify-content-around">
                            <div>
                              <button
                                class="portion"
                                type="button"
                                name="radio"
                                value="1 хүн"
                              >
                                1 хүн
                              </button>
                            </div>
                            <div>
                              <button
                                class="portion"
                                type="button"
                                name="radio"
                                value="2 хүн"
                              >
                                2 хүн
                              </button>
                            </div>
                          </div>
                        </div>
                        <div class="qnt">
                          <div>
                            <p class="title">Тоо</p>
                          </div>
                          <div
                            class="qnt1 d-flex my-2 mx-2 justify-content-between"
                          >
                            <input
                              type="button"
                              value="+"
                              class="button mx-2"
                            />
                            <input type="text" value="1" class="text1 mx-2" />
                            <input
                              type="button"
                              value="-"
                              class="button mx-2"
                            />
                          </div>
                        </div>
                        <div
                          class="submit d-flex justify-content-around mx-2 mt-5"
                        >
                          <button class="button" type="submit" value="Сагслах">
                            Сагслах
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          `;
}
