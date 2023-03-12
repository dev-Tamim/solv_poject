$(".english").click(function(){
    $(".other").slideToggle()
})

$(".back_to_top").click(function(){
    $("html,body").animate({
        scrollTop:"0px"
    })
})

$(window).scroll(function(){
   var scrolling=$(this).scrollTop()

   if (scrolling > 20) {
    $(".nav_menu").addClass("bg")
   }else{
    $(".nav_menu").removeClass("bg")
   }
   if (scrolling > 20) {
    $(".back_to_top").fadeIn("")
   }else{
    $(".back_to_top").fadeOut("")
   }


})