const form = document.getElementById("form");
const button = document.getElementById("button");
const input = document.getElementById("input");

form.addEventListener("submit",function (event1) {
  event1.preventDefault();
});

button.addEventListener("click", function() {
  let url = "janken/janken.html" + "?input=" + input.value;
  if(input.value.length === 0){
    alert("ユーザー名を入力してください");    
  } else {
    location.href = url;
  }
});
