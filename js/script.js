/* Author:

*/

$(document).ready(function() {
  
  $('#so_gehts ul li').click(function(){
    var myclass = $(this).attr('class');
    $('#so_gehts .pane.active').removeClass('active');
    $('#so_gehts').find('#' + myclass ).addClass('active');
    $('#so_gehts').removeClass('first second third')
    $('#so_gehts').addClass(myclass);
  })
  
  
  $('.bubble').append('<div class="arrow"></div>');
  
});






