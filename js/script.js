// customs function called
function getElement(id) {
	const element = document.getElementById(id).innerText;
	return element;
}

// Heart Count
const hearts = document.querySelectorAll(".fa-heart");
let heartCount = parseInt(getElement("heart-count"));

for (let i = 0; i < hearts.length; i++) {
	hearts[i].addEventListener("click", function () {
		heartCount++;
		document.getElementById("heart-count").innerText = heartCount;
	});
}

// Copy Button
document.getElementById("card-items").addEventListener("click", function (e) {
	const copyButton = e.target.closest(".copy-btn");
	if (copyButton) {
		const counter = document.getElementById("copy-button");

		const card = copyButton.parentElement.parentElement.parentElement;
		const number = card.getElementsByTagName("h2")[0].innerText;

		navigator.clipboard.writeText(number).then(function () {
			alert("The number " + number + " has been copied successfully✅");
			counter.innerText = Number(counter.innerText) + 1;
			copyButton.innerHTML =
				'<i class="fa-regular fa-circle-check pr-[8px]"></i>Copied';
			setTimeout(function () {
				copyButton.innerHTML =
					'<i class="fa-regular fa-copy pr-[8px]"></i>Copy';
			}, 900);
		});
	}
});

// Call History
document.getElementById("card-items").addEventListener("click", function (e) {
	const targetButton = e.target.closest(".call-btn");
	if (targetButton) {
		const card = targetButton.parentElement.parentElement.parentElement;
		const cardTitle = card.querySelector("h4").innerText;
		const cardNumber = card.querySelector("h2").innerText;
		const coinAmmount = Number(getElement("coin-amount"));
		if (coinAmmount < 20) {
			alert("❌ Not enough coins. Recharge to call.");
			return;
		} else {
			alert(`📞 Calling to ${cardTitle} ${cardNumber}`);
			document.getElementById("coin-amount").innerText = coinAmmount - 20;
			const now = new Date();
			const currentTime = now.toLocaleTimeString();
			const collectData = document.getElementById("collect-data");
			const collectDiv = document.createElement("div");
			collectDiv.innerHTML = `
        <div class="flex justify-between items-center gap-[16px] p-[16px] bg-[#FAFAFA] rounded-[8px] ">
            <div>
                <h4 class="text-[#111] text-[18px] font-[600] inter-font">${cardTitle}</h4>
                <span class="text-[#5C5C5C] text-[18px] font-normal">${cardNumber}</span>
            </div>
            <div>
                <p class="text-[#111] text-[18px]">${currentTime}</p>
            </div>
        </div>
      `;
			collectData.appendChild(collectDiv);
		}
	}
});

document.getElementById("clearBtn").addEventListener("click", function () {
	document.getElementById("collect-data").innerHTML = "";
});
