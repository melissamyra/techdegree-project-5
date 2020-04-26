$(document).ready( function(){
  //***** focus in *****
  $('#search').on('keyup focus', () => {
    // $('.gallery').hide();
    let search = $('#search').val().toUpperCase();

    //***** loop through all a tag with lightGallery attributes *****
    $('.gallery').each( (i, img) => {
      let string = $('.gallery')[i].getAttribute('data-sub-html').toUpperCase();
      // console.log(string); //test
      if (string.indexOf(search) > -1){
  //     images[i].addClassName('hide'); //give class name with hidden properties in CSS
        $('.gallery')[i].style.display = "block";
      } else {
        $('.gallery')[i].style.display = "none";
      } //***** OMG IT WORKED! *****
    });
  });
  // *****focus out *****
  // $('#search').on(' blur focusout', () => {
  //   $('.gallery').show();
  // });


});
