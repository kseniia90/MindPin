$(function () {
    // slider
    var owl = $(".owl-carousel").owlCarousel({
    items: 1,
    dots: false,
    onInitialized: updateCount,
  });
  owl.on('changed.owl.carousel', function(e) { 
    updateCount(e)
  })
  function updateCount(event) {
    console.log(event.item.count);
    console.log(event.item.index);
    $(".active-page").text(event.item.index + 1);
    $(".pages").text(event.item.count);
  }
  $(".next-slide").click(function () {
    owl.trigger("next.owl.carousel");
  });
  $(".prev-slide").click(function () {
    owl.trigger("prev.owl.carousel");
  });
 

  // accordion
  $(".accordion__title").on("click", function (e) {
    e.preventDefault();
    var $this = $(this);
    if (!$this.hasClass("accordion-active")) {
      $(".accordion__content").slideUp(400);
      $(".accordion__title").removeClass("accordion-active");
      $(".accordion__arrow").removeClass("accordion__rotate");
    }
    $this.toggleClass("accordion-active");
    $this.next().slideToggle();
    $(".accordion__arrow", this).toggleClass("accordion__rotate");
  });
});
