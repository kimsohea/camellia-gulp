export function getArrayFigure(selector) {
  const tmpDOM = document.querySelectorAll(selector);
  return tmpDOM[0].querySelectorAll("figure");
}
export function getDistanaceArray(coordArray) {
  let disArray = [];
  coordArray.forEach((item, idx, arr) => {
    let xDis = Math.abs(
      item.offsetLeft - (idx == 0 ? 0 : arr[idx - 1].offsetLeft)
    );
    let yDis = Math.abs(
      item.offsetTop - (idx == 0 ? 0 : arr[idx - 1].offsetTop)
    );
    let dis = xDis + yDis;
    disArray.push(dis);
  });
  return disArray;
}
export function getDistanceBase(GDA) {
  let dis = 0;
  let disArrayBase = [];
  GDA.forEach((item) => {
    dis += item;
    disArrayBase.push(dis);
  });
  return disArrayBase;
}
