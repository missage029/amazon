let slideIndex = 0;

function nextSlide(){
	showSlides(slideIndex+=1);
}
function previousSlide(){
	showSlides(slideIndex-=1);
}
function showSlides(){
	let slides = document.getElementsByClassName("item");


	if (slideIndex > slides.length - 1) {
		slideIndex = 0;
	}
		
	if (slideIndex < 0){
		slideIndex = slides.length - 1;
	}
	for ( let slide of slides){
		slide.style.display = "none";
	}
	slides[slideIndex].style.display = "block";
}
setInterval(function() {nextSlide();},1800);
	




let sliderImageIndex = 0;
function nextSlide1()
{
	if (sliderImageIndex < 14)
	{
		sliderImageIndex+=2;
		moveSlide1();
	}
}
function previousSlide1()
{
	if (sliderImageIndex >1)
	{
		sliderImageIndex-=2;
		moveSlide1();
	}
}
function moveSlide1()
{
	let slides = document.getElementsByClassName("slide");
	
	let slideMargin = 0;
	for (let i = 0; i < sliderImageIndex - 1; i++)
	{
		let slideWidth = slides[i].width;
		slideMargin += slideWidth;
		console.log(slideMargin);
	}
	
	let slidesList = document.getElementById("slidesList");
	slidesList.style.left = -slideMargin + 'px';
}
function init()
{
	let buttonNext = document.getElementById("buttonNext");
	buttonNext.addEventListener ("click",nextSlide1);
	let buttonPrevious = document.getElementById("buttonPrevious");
	buttonPrevious.addEventListener ("click",previousSlide1);
}
setTimeout(init,0);



