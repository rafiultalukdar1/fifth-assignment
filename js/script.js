// customs function called
function getElement(id) {
    const element = document.getElementById(id).innerText;
    return element;
}

// heart count 
const hearts = document.querySelectorAll(".fa-heart");
let heartCount = parseInt(getElement("heart-count")); 

for (let i = 0; i < hearts.length; i++) {
  hearts[i].addEventListener("click", function() {
    heartCount++; 
    document.getElementById("heart-count").innerText = heartCount;
  });
}







