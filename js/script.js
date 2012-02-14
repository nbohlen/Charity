/* Author:

*/

$(document).ready(function() {
  $('#so_gehts ul li').click(function(){
    $('#so_gehts').removeClass('first second third')
    $('#so_gehts').addClass($(this).attr('class'));
  })
});






