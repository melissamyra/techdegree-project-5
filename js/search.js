$(document).ready( function(){
  //***** focus in *****
  $('#search').on('keyup focus', () => {

    let search = $('#search').val().toUpperCase();

    //***** loop through all a tag with lightGallery attributes *****
    $('.gallery').each( (i, img) => {
      let string = $('.gallery')[i].getAttribute('data-sub-html').toUpperCase();

      if (string.indexOf(search) > -1){

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
