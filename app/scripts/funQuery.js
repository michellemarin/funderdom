var listElements = $('li');
var nestedUl = $('ul ul');

listElements.on('mouseover' , function(event) {
  $(this).addClass('stripe');
});

listElements.on('mouseout', function(event) {
  $(this).removeClass('stripe');
});

listElements.on('click', function (event) {
  $(this).toggleClass('active');
  $(this).siblings().removeClass('active');
});
