$(document).ready(function(){
  
    $(".burger").click(function(){
        $($(this).children("i")).toggleClass("ri-menu-2-line ri-close-large-line");
        $("nav").toggleClass("show");
    });

});