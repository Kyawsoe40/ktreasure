/*****merchslide**** */
$('.merchslide').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows : false
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows : false
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  
  $(document).ready(function(){
    /****navbar toggler****/
      
    if($(document).width() <= 575){
      $('.navbar-toggler').on('click',function(){
      let toggleon = $('.navbar-toggler').attr("aria-expanded");
        if(toggleon == 'false'){
          $('.slider').hide();
          $('.new-releases').hide();
          $('.top-sales').hide();
          $('.about-us').hide();
          $('.nav-link').on('click',function(){
            $('.slider').show();
          $('.new-releases').show();
          $('.top-sales').show();
          $('.about-us').show();
          });
        }
        else{
          $('.slider').show();
          $('.new-releases').show();
          $('.top-sales').show();
          $('.about-us').show();
        }
    });
    }
    $('.input').keypress(function(e){
      if(e.which == 13){
        $('#new-releases').css("display","none");
        $('#top-sales').css("display","none");
        $('#categorize').css("display","block");
        let input = $('.input').val().toLowerCase();
        let merchs = document.querySelectorAll(".categorized-name");   
       
        let i;
        for(i=0; i < merchs.length; i++){
          var merch = [];
          merch[i]= merchs[i].innerHTML.toLowerCase();
          
         let index = merch[i].indexOf(input);
          if(index !== -1){
            $(merchs[i]).parent().parent().show();               
          }
          else{
           $(merchs[i]).parent().parent().hide();              
          }
        }
        
       
      }
    });
     /****search bar*** */
    });
   
    
    
