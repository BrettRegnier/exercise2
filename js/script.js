window.onload = Init;

function Init()
{
	var counter = 0;	//Counter for click on story board
	var story_board = getElementById("storyboard");
	var current_message = getElementById("storyboard__message--title");
	var next_message;
	story_board.addEventListener("click", function(){
		counter++;
		current_message.toggle("storyboard__message--active");
		next_message = getElementById("storyboard__message--pt" + counter);
		next_message.toggle("storyboard__message--active");
		current_message = next_message;
	}); 
}