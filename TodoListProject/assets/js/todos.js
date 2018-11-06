// Check off Specific Todos By Clicking:
//we must define the event on an exsisting element = ul
//but the code is run only when li is clicked:
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

//Click on X to delete Todo
$("ul").on("click", "span", function(event) {
	//remove the entire li, the parent of the span
	$(this).parent().fadeOut(500, function() {
		//remove the li just after 500ms
		$(this).remove(); //'this' here refer to 'parent' = li
	});
	//prevent bubbling event up the layers
	event.stopPropagation();
});

// we must use on() not click(),
// because click() add listeners only for existing elements.
// versus on() add listeners for all future elements:
	// $("li").click(function() {
	// 	$(this).toggleClass("completed");
	// });

$("input[type='text']").keypress(function(event) {
	//the number of 'enter' is 13
	if(event.which === 13) {
		//grabbing the value of the text from input
		var TodoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		//'append' add it as html:
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + TodoText + "</li>") 

	}
});

$("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle();
});