$(document).ready(function() {
  $(".question").hide();


$(".well").hover(function() {
  $(this).addClass('blue');
}, function() {
  $(this).removeClass('blue');
});


$(".well").click(function() {
 $(".question").show();
});
             





	
// $(".well").click(function() {


//  function() {
//     $(this).closest(".well").css("z-index", 0);
//     $(this).animate({ height: "90", width: "90", left: "+=55", top: "+=55" }, "fast");
// });​


// $('div').hover(function(){
//   $(this).addClass('green');
// });

});