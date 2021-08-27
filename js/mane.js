
let servicesOffset=$('#services').offset().top
console.log(servicesOffset);

$(window).scroll(function(){

 let Scroll= $(window).scrollTop()


 if(Scroll>=servicesOffset-10){
     $('#navbarred').css('backgroundColor','black')
 }else{
    $('#navbarred').css('backgroundColor','transparent')
 }

})