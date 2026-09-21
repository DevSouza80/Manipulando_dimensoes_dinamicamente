$(function(){
  
     //var elWidth = $('.box').width();
     
     //$('.box').width('1200')
     // console.log($('.box').width());

     //Setamos a largura
     $('.box').css('width','900')
    
     //width/height = Dimensão calculada = Dimensão total com base no padding.

     //innerWWidth/innerHeight = Dimensão calculada total INCLUINDO o padding.
     //outerWidth/outerHeight =  Dimensão calculada total INCLUINDO o padding e margin (se o parametro for true).

     // $('.box').css('width','900');
      console.log("width:" + $('.box').width())
     console.log( "Inner Width:" + $('.box').innerWidth());
     console.log( "Outer Width:" + $( '.box').outerWidth());
      
     
     console.log("height:" + $('.box').height())
     console.log( "Inner height: " + $('.box').innerHeight());
     console.log( "Outer height: " + $( '.box').outerHeight(true));


});