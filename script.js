// document.querySelector(".photo").style.display="none";
$(".photo img").mouseenter(function(){
  $('aside').css('z-index','2').css('opacity','1');
  $('aside img').attr('src',this.src);
});
$(".photo img").mouseout(function(){
  $('aside').css('z-index','-1').css('opacity','0');
});