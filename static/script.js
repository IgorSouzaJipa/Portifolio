
  
  
  
const menuMobile = document.querySelector(".menu-mobile");
const body = document.querySelector("body");

menuMobile.addEventListener('click', () => {

    menuMobile.classList.contains("bi-list-nested")
    ? menuMobile.classList.replace("bi-list-nested", "bi-x")
    : menuMobile.classList.replace("bi-x", "bi-list-nested");
    body.classList.toggle("menu-nav-active");
});


  $('.nav-menu a[href^="#"]').on('click', function(e) {
	e.preventDefault();
	var id = $(this).attr('href'),
			targetOffset = $(id).offset().top;
			
	$('html, body').animate({ 
		scrollTop: targetOffset - 100
	}, 500);
});
