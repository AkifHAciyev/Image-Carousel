let URL = 'https://source.unsplash.com/random/500x500';
let div = document.querySelector('div');
let prevButton = document.querySelector('.prevButton');
let nextButton = document.querySelector('.nextButton');
let allImg = [];

function randomImg() {
	axios.get(URL).then((res) => {
		div.innerHTML = ' ';

		let img = res.config.url;
		allImg.push(img);

		if (allImg.length > 5) {
			allImg.shift();
		}

		for (let i = 0; i < allImg.length; i++) {
			let sliderImg = document.createElement('img');
			sliderImg.src = allImg[i];
			if (i == allImg.length - 1) {
				sliderImg.classList.add('show');
			} else {
				sliderImg.classList.remove('show');
			}
			div.append(sliderImg);
		}
	});
}

prevButton.addEventListener('click', () => {});

window.addEventListener('load', () => {
	let span = document.createElement('span');
	span.innerHTML = 'Loading....';
	div.appendChild(span);
});

setInterval(randomImg, 3000);
