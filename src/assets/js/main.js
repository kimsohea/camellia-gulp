import { getArrayFigure, getDistanaceArray, getDistanceBase } from "./util.js";

window.addEventListener("DOMContentLoaded", () => {
  let windowInnerheight = window.innerHeight;
  let naviFlg = false;
  const gnb = document.querySelectorAll(`.gnb>li>a`);
  const toggleBar = document.querySelector(".toggleBar");

  gnb.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      let posTop =
        document.querySelector(this.hash).offsetTop + windowInnerheight;
      window.scrollTo({ top: posTop, behavior: "smooth" });
    });
  });

  toggleBar.addEventListener("click", function () {
    if (!naviFlg) {
      naviFlg = true;
      this.classList.add("active");
      this.nextElementSibling.classList.add("active");
    } else {
      naviFlg = false;
      this.classList.remove("active");
      this.nextElementSibling.classList.remove("active");
    }
  });

  const mainLine = document.querySelector(".mainLine");
  const lineLength = mainLine.getTotalLength();
  const winHalf = windowInnerheight / 2;
  const figureArray = getArrayFigure(".cMLine");
  const disArray = getDistanaceArray(figureArray);
  const tmpDistant = getDistanceBase(disArray);

  window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY;
    let mLine = lineLength + winHalf - scrollTop * 2.75;
    mainLine.style.strokeDashoffset = mLine;

    if (windowInnerheight < 815) {
      mLine = mLine * 1.25;
      figureArray.forEach((item, idx) => {
        if (tmpDistant[idx] < lineLength - winHalf - mLine)
          item.classList.add(`line`);
        else item.classList.remove(`line`);
      });
    } else {
      if (mLine < 700) mLine = mLine * 0.5 - 650;
      figureArray.forEach((item, idx) => {
        if (tmpDistant[idx] < lineLength - mLine) item.classList.add(`line`);
        else item.classList.remove(`line`);
      });
    }
  });
});
