// document.querySelector(".photo").style.display="none";
$("section .row:nth-child(2) div span").hide();
$(".photo img").click(function(){
  let $text=document.createElement("p");
  $text.textContent=this.parentNode.children[1].textContent;
  $text.className="carrou-text";

  $('aside').css('z-index','3').css('opacity','1');
  $('aside img').attr('src',this.src);

  $('aside p').has("p")? (
    $('aside p').empty(),
    $('aside p').append($text)
  ):$('aside p').append($text);
});

$(".x").click(function(){
  $('aside').css('z-index','-1').css('opacity','0');
  $('aside p').empty();
});