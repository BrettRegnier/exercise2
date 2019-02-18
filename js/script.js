window.onload = Init;

var FADETIME = 500;

var counter;
var story_board;
var current_message;
var next_message;

var readyToSwitch = true;

function Init()
{
	var current_trail;
	var isRead = false;
	
	// gets all trails and places them into an array.
	var trailArray = document.getElementsByClassName("trail__pt");
	
	counter = 0;	//Counter for click on story board
	story_board = document.getElementById("storyboard");
	current_message = document.getElementById("storyboard__message--pt0");
	current_message.style.opacity = "1";
	
	story_board.addEventListener("click", async function() {
		if (readyToSwitch)
		{			
			// stops the user from overflowing the story parts
			if (counter == 5)
			{
				counter = -1;
				isRead = true;
			}
			counter++;
			
			DisplayPoem(counter);
			
			// Displays the trails
			if (isRead == false)
			{
				current_trail = document.getElementById("trail__pt" + counter).parentNode;
				
				if (!current_trail.classList.contains("trail__divider--active"))
				{
					current_trail.classList.add("trail__divider--active");
				}
			}
			
		}
	}); 
	
	for (var i = 0; i < trailArray.length; i++)
	{
		trailArray[i].addEventListener("click", function()
		{
			var arg = this.id.substring(this.id.length -1 , this.id.length);
			TrailClick(arg);
		});
	}
}

function SetColor(element){
	switch(counter){
		case 1:
			element.style.color = "#4392f1";
			break;
		case 2:
			element.style.color = "#dc493a";
			break;
		case 3:
			element.style.color = "#3d2645";
			break;
		case 4:
			element.style.color = "#87bba2";
			break;
		case 5:
			element.style.color = "#edd382";
			break;
	}
}

async function DisplayPoem(poemPart)
{
	// prevents overlapping clicking
	readyToSwitch = false;
	
	// current is active, so below hides current message
	current_message.style.opacity = "0";
	await Sleep(FADETIME);
	ToggleActive(current_message);
	
	
	next_message = document.getElementById("storyboard__message--pt" + poemPart);
	
	SetColor(next_message);

	ToggleActive(next_message);
	await Sleep(FADETIME);
	next_message.style.opacity = "1";
	current_message = next_message;
	
	readyToSwitch = true;
}

function ToggleActive(element)
{
	element.classList.toggle("storyboard__message--active");
}

function TrailClick(value)
{
	if (readyToSwitch)
	{
		if (counter != value)
		{
			counter = value;
			DisplayPoem(value);
		}
	}
}

// sleep for duration ms
function Sleep(duration)
{
	return new Promise((method) => setTimeout(method, duration));
}