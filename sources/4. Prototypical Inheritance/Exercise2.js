function HtmlElement() {
  this.click = function () {
    console.log("click");
  };
}
HtmlElement.prototype.focus = function () {
  console.log("focus");
};

function HtmlSelectElement(items = []) {
  this.items = items;

  this.addItem = function (item) {
    this.items.push(item);
  };

  this.removeItem = function (item) {
    this.items = this.items.filter((preItem) => preItem !== item);
  };

  const Items = this.items
    .map(
      (item) => `
    <option>${item}</option>`
    )
    .join("");
  const Markup = (items) => `<select>${items}
  </select>`;

  this.render = () => Markup(Items);
}
HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

function HtmlImageElement(src = "") {
  this.src = src;
  this.render = function () {
    return `<img src="${this.src}" />`;
  };
}
HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;

const elements = [
  new HtmlSelectElement([1, 2, 3]),
  new HtmlImageElement("http://jonghyeon.com"),
];

for (let element of elements) console.log(element.render());
for (let element of elements) console.log(element);
