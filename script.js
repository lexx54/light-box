// document.querySelector(".photo").style.display="none";
$(".photo img").click(function(){
  $('aside').css('z-index','3').css('opacity','1');
  $('aside img').attr('src',this.src);
});

$(".x").click(function(){
  $('aside').css('z-index','-1').css('opacity','0');
});