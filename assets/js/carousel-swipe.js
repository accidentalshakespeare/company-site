$(document).ready(function() {
  
          //add your other targets here
       $(".carousel").swiperight(function() {
          $(this).carousel('prev');
          });
//add your other targets here
       $(".carousel").swipeleft(function() {
          $(this).carousel('next');
     });

      jQuery(document).ready(function($) {

      $('#myCarousel').carousel({
              interval: 5000
      });

      $('#carousel-text').html($('#slide-content-0').html());

      //Handles the carousel thumbnails
     $('[id^=carousel-selector-]').click( function(){
          var id = this.id.substr(this.id.lastIndexOf("-") + 1);
          var id = parseInt(id);
          $('#myCarousel').carousel(id);
      });


      // When the carousel slides, auto update the text
      $('#myCarousel').on('slid.bs.carousel', function (e) {
               var id = $('.item.active').data('slide-number');
              $('#carousel-text').html($('#slide-content-'+id).html());
      });
});
  });
