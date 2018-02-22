var submit = $("#button1");
var list = $("#list");
var input = $("#input1");
var form = $("#form");


form.submit(function (event) {
// submit.on('click', function(event) {
  list.prepend("<li></li>");
  event.preventDefault();
  $("li:first").text(input.val());
  $("li:first").addClass("item");
  $("li:first").attr("id", "item");
  input.val('')

  $("li").dblclick(function() {
  // $("li").on('click', function(event) {
    $(this).addClass("done");
    list.find(this).appendTo(list);
  });

$("li").contextmenu(function() {
  $(this).removeClass("done");
});

});
