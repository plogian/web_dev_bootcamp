// Check off specific Todos by clicking
// The 2nd argument says, "when an li is clicked
// inside a ul"
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

// Delete to-dos by clicking X, but this also triggers
// toggleClass("completed"), so we add stop.Propogation
$("ul").on("click", "span", function(event) {
	event.stopPropagation();
	//need to remove parent of this
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	})
});

$("input[type='text']").keypress(function(event){
	if(event.which=== 13) {
		var todoText = ($(this).val());
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todoText  + "</li>");
	}
});

$(".fa-pencil").click(function() {
	$("input[type='text']").fadeToggle();
});