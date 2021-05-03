// Request
// 1. HtmlElement :: HtmlSelectElement's parent
// 2. HtmlSelectElement

// Parent Object
function HtmlElement() {
  this.click = function () {
    console.log("click");
  };
}
HtmlElement.prototype.focus = function () {
  console.log("focus");
};

// Child Object
function HtmlSelectElement(items = []) {
  this.items = items;

  this.addItem = function (item) {
    this.items.push(item);
  };

  this.removeItem = function (item) {
    this.items = this.items.filter((preItem) => preItem !== item);
  };
}

// ::: Caution ::: baseHtmlSelectElement
// HtmlSelectElement.prototype = Object.create(HtmlElement.prototype); // baseHtmlElement, It's parent of HtmlElement
HtmlSelectElement.prototype = new HtmlElement(); // HtmlElement self!!!!
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

const e = new HtmlElement();
const s = new HtmlSelectElement();

console.log(e);
console.log(s);
