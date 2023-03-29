$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:1,
        nav: true,
        dots: false,
        // onDragged: updateCount,
        next: updateCount,
        prev: updateCount,
    });
    function updateCount(event) {
        console.log(event.item.count)
        console.log(event.item.index)
    }
  });

  $(function() {
	
	//BEGIN
	$(".accordion__title").on("click", function(e) {

		e.preventDefault();
		var $this = $(this);

		if (!$this.hasClass("accordion-active")) {
			$(".accordion__content").slideUp(400);
			$(".accordion__title").removeClass("accordion-active");
			$('.accordion__arrow').removeClass('accordion__rotate');
		}

		$this.toggleClass("accordion-active");
		$this.next().slideToggle();
		$('.accordion__arrow',this).toggleClass('accordion__rotate');
	});
	//END
	
});
// показать меню при клике на бургер, заборонили scroll body при відкритому меню-бургер

const menuIcon = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if(menuIcon) {menuIcon.addEventListener("click", function menu(e) {
        document.body.classList.toggle('lock');
        menuBody.classList.toggle('_active');
        menuIcon.classList.toggle('_active');
    })
}