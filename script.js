// Code goes here

$('ul').on('click', 'li', function(){
  $(this).toggleClass('completed');
});

$('ul').on('click', 'span', function(event){
    $(this).parent().remove();
});

$('input').keypress(function(event){
  if(event.which === 13) {
    var todoItem = $(this).val();
    $('ul').append(
    "<li> " +
    todoItem +
      "<span>" +
        "<i class='fa fa-times'></i>" +
      "</span>" +
    "</li>"
    );
    $('input').val([]) - "";
    
  }
});