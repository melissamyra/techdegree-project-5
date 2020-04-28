$(document).ready( function(){
  //***** listen on input focus / user input *****
  $('#search').on('keyup focus', () => {
    //save user input
    let search = $('#search').val().toUpperCase();
    //***** loop through all a tag with lightGallery attributes *****
    $('.gallery').each( (i, img) => {
      //save captions
      let string = $('.gallery')[i].getAttribute('data-sub-html').toUpperCase();
      //if caption contains words from user input
      if (string.indexOf(search) > -1){
        //show image
        $('.gallery')[i].style.display = "block";
      } else { //else hide image
        $('.gallery')[i].style.display = "none";
      } //***** OMG IT WORKED! *****
    });
  });
});
