const form = document.getElementById("form");  //HtmlファイルでFORMタグにformという名前のidをつけているため、"form"と指定ができるようになっている。
const input = document.getElementById("input");
const ul = document.getElementById("ul");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  add();
})

function add() {
  const li = document.createElement("li");
  li.innertext = input.value;
  li.classList.add("list-group-item");
  ul.appendChild(li);
  input.value= "";
}