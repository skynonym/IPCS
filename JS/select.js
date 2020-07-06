function Dropdown(opt) {
  this.options = opt;

  window.getdd = (elem) => {
    const id = elem.closest(".prov-opts").parentElement.id;
    return window.dropdowns[id];
  };

  this.init = function () {
    this.elem = document.getElementById(this.options.id);
    const val = this.options.val;
    const arrowImg = `<img src='./images/arrow.svg'>`;
    let html = `<div class="prov-opts">
									<div class="prov-first">
										<span class="dropdown-value">${val}</span>
										<span class="dropdown-arrow">${arrowImg}</span>
									</div>
									<div class="dropdown__panel">
										<div class="dropdown__items" > 
										</div>
									</div>
								</div>`;
    this.elem.innerHTML = html;
    let elem = this.elem;

    // *store a hash of dropdowns
    if (!window.dropdowns) window.dropdowns = {};
    window.dropdowns[this.options.id] = this;

    // *get elements
    this.items = elem.querySelector(".dropdown__items");
    this.firstBox = elem.querySelector(".prov-first");
    this.arrow = elem.querySelector("img");
    this.value = elem.querySelector(".dropdown-value");

    // *populate dropdown data
    const data = this.options.data;
    html = "";
    data.forEach(function (elem) {
      html += `<div class="dropdowm__item" onmousedown="const self=getdd(this);self.clicked(this)">${elem}</div>`;
    });
    this.items.innerHTML = html;

    const self = this;

    // *close whem click outside the box
    document.addEventListener("mousedown", () => {
      self.hide();
    });

    // *drop the dropdown
    this.elem.addEventListener("mousedown", () => {
      event.stopPropagation();
      if (self.isVisible) self.hide();
      else self.show();
    });
  };

  // *functions
  this.clicked = (elem) => {
    event.stopPropagation();
    this.hide();
    let newVal = elem.innerHTML;
    this.value.innerHTML = newVal;

    if (this.options.cb) this.options.cb(newVal);
  };
  this.show = () => {
    this.isVisible = true;
    this.items.style.transform = "translate(0px, 0px)";
    this.arrow.style.transform = "rotateX(180deg)";
    this.firstBox.classList.add("radius");
  };

  this.hide = () => {
    this.isVisible = false;
    this.items.style.transform = "translate(0px, -320px)";
    this.firstBox.classList.remove("radius");
    this.arrow.style.transform = "rotateX(0deg)";
  };

  this.init();
  return this;
}

const optsOne = new Dropdown({
  id: "prov-options",
  val: "ภาพรวม",
  data: [
    "ภาพรวม",
    "เชียงใหม่",
    "เชียงราย",
    "ลำพูน",
    "ลำปาง",
    "น่าน",
    "แพร่",
    "พะเยา",
    "แม่ฮ่องสอน",
  ],
  cb: function (newVal) {},
});
