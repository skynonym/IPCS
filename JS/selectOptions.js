function SelectOptions(opt) {
  this.options = opt;
  this.active = function () {
    const allOptions = this.options.allOptions;
    const self = this.options;
    const here = this;

    for (let i = 0; i < allOptions.length; i++) {
      allOptions[i].addEventListener("click", function (e) {
        const current = self.optionContainer.querySelector(".active");
        current.className = current.className.replace("active", "");
        e.target.className = "active";
        // *showing/hiding charts
        const openItem = self.chartWrapper.querySelector(".open");
        openItem.className = openItem.className.replace("open", "");

        const GAPtext = e.target.innerHTML;
        // const chartCon = self.chartCon;

        switch (GAPtext) {
          case "เชียงใหม่":
            here.openClose(0);
            break;
          case "เชียงราย":
            here.openClose(1);
            break;
          case "พะเยา":
            here.openClose(2);
            break;
          case "แพร่":
            here.openClose(3);
            break;
          case "ลำพูน":
            here.openClose(4);
            break;
          case "ลำปาง":
            here.openClose(5);
            break;
          case "น่าน":
            here.openClose(6);
            break;
          case "แม่ฮ่องสอน":
            here.openClose(7);
            break;
          default:
            console.log("unexpected situation!!!!!");
            return;
        }
      });
    }
  };
  this.active();

  this.openClose = (no) => {
    if (this.options.chartCon[no].classList[1] === "open") {
      return;
    } else if (this.options.chartCon[no].classList[1] !== "open") {
      this.options.chartCon[no].classList.add("open");
    } else {
      console.log("error");
    }
  };
}
