let div = document.querySelector('div');
let prevButton = document.querySelector('.prevButton');
let nextButton = document.querySelector('.nextButton');
let allImg = [];

function randomImg() {
	fetch('https://source.unsplash.com/random/500x500').then((res) => {
		div.innerHTML = ' ';

		let img = res.url;
		allImg.push(img);

		if (allImg.length > 5) {
			allImg.shift();
		}
		for (let i = 0; i < allImg.length; i++) {
			let sliderImg = document.createElement('img');

			sliderImg.src = allImg[i];
			if (i == allImg.length - 1) {
				sliderImg.classList.add('show');
				sliderImg.classList.add('img');
			} else {
				sliderImg.classList.add('img');
			}
			div.append(sliderImg);
		}
	});
}

nextButton.addEventListener('click', function () {
	let imgs = document.querySelectorAll('.img');
	let activeImg = document.querySelector('.show');
	if (activeImg.nextElementSibling) {
		activeImg.classList.remove('show');
		activeImg.nextElementSibling.classList.add('show');
	} else {
		activeImg.classList.remove('show');
		imgs[0].classList.add('show');
	}
});

prevButton.addEventListener('click', function () {
	let imgs = document.querySelectorAll('.img');
	let activeImg = document.querySelector('.show');
	if (activeImg.previousElementSibling) {
		activeImg.classList.remove('show');
		activeImg.previousElementSibling.classList.add('show');
	} else {
		activeImg.classList.remove('show');
		imgs[imgs.length - 1].classList.add('show');
	}
});

window.addEventListener('load', function () {
	let span = document.createElement('span');
	span.innerText = 'Loading...';
	div.append(span);
});

setInterval(randomImg, 3000);
