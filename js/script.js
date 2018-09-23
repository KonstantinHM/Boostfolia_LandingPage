// burger-menu function

function myFunction() {
  var x = document.getElementById("menu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// main slider function

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName('slider_item');
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = 'none';
		}
	slides[slideIndex - 1].style.display = 'block';
}


//modal video function

function modalVideo() {
	var openModal = document.getElementById("modal_video-wrapper");
	var vidPlayer = document.getElementById("videoPlayer");
	var clonePlayer = vidPlayer.cloneNode(true);
	if (openModal.style.display === "block") {
		openModal.style.display = "none";
		openModal.appendChild(clonePlayer);
		vidPlayer.remove();
	} else {
		openModal.style.display = "block";
	}
}


// Portfolio functions

filterSelection('all_projects')
function filterSelection(c) {
	var x, i;
	x = document.getElementsByClassName('gallery-item');
	if (c == 'all_projects') c = '';

	for (i = 0; i < x.length; i++) {
		w3RemoveClass(x[i], 'show_gallery-item');
		if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], 'show_gallery-item');
	}
}

function w3AddClass(element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(' ');
	arr2 = name.split(' ');
	for (i = 0; i < arr2.length; i++) {
		if (arr1.indexOf(arr2[i]) == -1) {
			element.className += ' ' + arr2[i];
		}
	}
}

function w3RemoveClass(element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(' ');
	arr2 = name.split(' ');
	for (i = 0; i < arr2.length; i++) {
		while (arr1.indexOf(arr2[i]) > -1) {
			arr1.splice(arr1.indexOf(arr2[i]), 1);
		}
	}
	element.className = arr1.join(' ');
}

var btnContainer = document.getElementById('portfolio-button_container');
var btns = btnContainer.getElementsByClassName('portfolio-button');
for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener('click', function() {
		var current = document.getElementsByClassName('active_tooggles-btn');
		current[0].className = current[0].className.replace(' active_tooggles-btn', '');
		this.className += ' active_tooggles-btn';
	});
}


// jQuery clients carousel

$(document).ready(function() {
	$(".owl-carousel").owlCarousel({
		loop:true,
		items:3,
		margin:23,
		responsive:{
			0:{
				items:1,
				margin:0
			},
			800:{
				items:2,
				margin:0
			},
			1300:{
				items:3
			}
		}
	});
});

$(document).ready(function() {
	var owl = $('.owl-carousel');
	owl.owlCarousel();

	$('.NextItemCarousel').click(function() {
		owl.trigger('next.owl.carousel');
	})
	
	$('.PrevItemCarousel').click(function() {
    	owl.trigger('prev.owl.carousel', [300]);
	})
});


// memberCard and progressBar carousel script

var memberCardIndex = 1;
showMemberCard(memberCardIndex);

var SkillInsideWrapperIndex = 1;
showProgressBar(SkillInsideWrapperIndex);

function currentMemberCard(n) {
	showMemberCard(memberCardIndex = n);
}
function currentSkillInsideWrapper(n) {
	showProgressBar(SkillInsideWrapperIndex = n);
}

function showMemberCard(n) {
	var i;
	var memberCard = document.getElementsByClassName('memberCard');
	var dots = document.getElementsByClassName('dot');
	if (n > memberCard.length) {memberCardIndex = 1}
		if (n < 1) {memberCardIndex = memberCard.length}
			for (i = 0; i < memberCard.length; i++) {
				memberCard[i].style.display = 'none';
			}
			for (i = 0; i < dots.length; i++) {
				dots[i].className = dots[i].className.replace(' active-dot', '');
			}
			memberCard[memberCardIndex - 1].style.display = 'block';
			dots[memberCardIndex - 1].className += ' active-dot';
}

function showProgressBar(n) {
	var i;
	var skillInsideWrapper = document.getElementsByClassName('skill_inside-wrapper');
	var dots = document.getElementsByClassName('dot');
	if (n > skillInsideWrapper.length) {SkillInsideWrapperIndex = 1}
		if (n < 1) {SkillInsideWrapperIndex = skillInsideWrapper.length}
			for (i = 0; i < skillInsideWrapper.length; i++) {
				skillInsideWrapper[i].style.display = 'none';
			}
			for (i = 0; i < dots.length; i++) {
				dots[i].className = dots[i].className.replace(' active-dot', '');
			}
			skillInsideWrapper[SkillInsideWrapperIndex - 1].style.display = 'block';
			dots[SkillInsideWrapperIndex - 1].className += ' active-dot';
}


// jQuery progress(skill) bar with viewport checker plugin


$(".skillbar-bar-percent").viewportChecker({
	callbackFunction:function(){
		$('.skillbar').each(function(){
			$(this).find('.skillbar-bar').animate({
				width:$(this).attr('data-percent')
			}, 1000);
		});
	}
});


// jQuery counter

$('.count').counterUp({
	delay: 10,
	time: 1300
});


// map hidden button function

var acc = document.getElementsByClassName('map_hide-button');
var i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener('click', function() {
		this.classList.toggle('active');

		var map = this.nextElementSibling;
		if (map.style.display === 'block') {
			map.style.display = 'none';
		} else {
			map.style.display = 'block';
		}
	});
}

// display the map function

$(function myMap() {
	var mapCanvas = document.getElementById('map');
	var mapOptions = {
		center: new google.maps.LatLng(55.164440, 61.436844),
		zoom: 10
	};
	var map = new google.maps.Map(mapCanvas, mapOptions);
});