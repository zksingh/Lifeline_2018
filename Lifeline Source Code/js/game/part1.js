function Start(){

	$ = {};
	
	/////// SET UP SCENE ////////

	

	//////////////////////////////
	
	N("<b>LIFELINE 2018</b>");
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
	N("<b>TRUMP TO REDEFINE DEFINITION OF GENDER--ERASING TRANS PEOPLE.</b>");
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
	$.asked_idontknow = true;
	N("I don't know right now. I don't know.");
	p("Okay.");
	N("Okay.");
	p("It's gonna be okay.");
	N("Yeah.");
	p("I will text you later ok? See you after practice.");
	N("Yeah no worries. Have a good practice.");
	Clear();
	Start_Part_2();
}
function ImFine(){
	$.asked_imfine = true;
	N("I'm fine, it'll be fine. It's not a real policy yet...");
	p("I mean yeah but still are you sure you're ok?");
	N("Yeah I'm good I promise.");
	p("Okay I trust you");
	N("Okay.");
	p("I will text you later ok? See you after practice.");
	N("Yeah for sure. Have a good practice.");
	Clear();
	Start_Part_2();
}
function No(){
	$.asked_no = true;
	N("No, I'm freaking out. What is happening?");
	p("I promise you're safe. Nothing will happen to you.");
	p("And if something does happen we will fight it together ok?");
	N("Okay.");
	p("Okay.");
	N("I'm losing hope.");
	p("Don't lose hope.");
	p("We've fought this war before.");
	N("...");
	p("We just gotta keep pushing.");
	N("Yeah...");
	p("Okay.");
	N("Okay.");
	p(" I gotta go to practice. I'll see you after.");
	N("Okay. Have a good practice.");
	Clear();
	Start_Part_2();
}

