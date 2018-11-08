function Start(){

	$ = {};
	
	/////// SET UP SCENE ////////

	

	//////////////////////////////
	
	N("LIFELINE 2018");
	Start_Part_1();
}
function Start_Part_1(){
	p("Zayn.");
	p("Zayn wake up.");
	p("ZAYN I need you to read this.");
	N("Hey morning sorry I slept in.");
	p("Did you read it?");
	N("Read what?");
	p("The article.");
	N("Hold on I'm reading it now.");
	Wait(500);
	N("Oh my god...");
	N("TRUMP TO REDEFINE DEFINITION OF GENDER--ERASING TRANS PEOPLE.");
	p("Are you ok?");
	
	Choose({
	"I don't know right now. I don't know.": function (){
		IDontKnow("I don't know right now.");
	},
	"I'm fine, it'll be fine. It's not a real policy yet...": function (){
		ImFine("I'm fine, it'll be fine.");
	},
	"No, I'm freaking out. What is happening?": function (){
		No("No, I'm freaking out.");
	}
	});
}
function IDontKnow(){


}
