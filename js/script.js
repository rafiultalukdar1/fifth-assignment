// customs function called
function getElement(id) {
    const element = document.getElementById(id).innerText;
    return element;
}

// Heart Count 
const hearts = document.querySelectorAll(".fa-heart");
let heartCount = parseInt(getElement("heart-count")); 

for (let i = 0; i < hearts.length; i++) {
  hearts[i].addEventListener("click", function() {
    heartCount++; 
    document.getElementById("heart-count").innerText = heartCount;
  });
}


// Copy Button 
document.getElementById("card-items").addEventListener("click", function (e) {
	if (e.target.classList.contains("copy-btn")) {
		copyNumber(e.target);
	}
});

function copyNumber(button) {
	const counter = document.getElementById("copy-button");
	counter.innerText = Number(counter.innerText) + 1;
	const card = button.parentElement.parentElement.parentElement;
	const number = card.getElementsByTagName("h2")[0].innerText;
	navigator.clipboard.writeText(number).then(function () {
		alert("The number " + number + " has been copied successfully✅");
		button.innerHTML = '<i class="fa-regular fa-circle-check pr-[8px]"></i>Copied';
		setTimeout(function () {
			button.innerHTML = '<i class="fa-regular fa-copy pr-[8px]"></i>Copy';
		}, 1100);
	});
}