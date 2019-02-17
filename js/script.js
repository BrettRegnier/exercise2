window.onload = Init;

function Init()
{
	var counter = 0;	//Counter for click on story board
	var story_board = document.getElementById("storyboard");
	var current_message = document.getElementById("storyboard__message--title");
	var next_message;
	story_board.addEventListener("click", function(){
		counter++;
		current_message.classList.toggle("storyboard__message--active");
		next_message = document.getElementById("storyboard__message--pt" + counter);
		next_message.classList.toggle("storyboard__message--active");
		current_message = next_message;
	}); 
}