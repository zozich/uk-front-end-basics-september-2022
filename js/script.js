// alert("Hello world!")

console.log("First message to console");

console.log($(".section-control"))
console.log($(".restaurant"))

$(".section-control").click(function () {
  $(".slider").slideToggle()
})

$('.slider').slick({
  infinite: true,
  slidesToShow: 4,
});