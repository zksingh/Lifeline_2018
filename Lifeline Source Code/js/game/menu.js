function Start(){

	$ = {};
	
	/////// SET UP SCENE ////////

	

	//////////////////////////////

	N("<b>LifeLine 2018</b>");
	N("A game based on the memo leaked by the Trump Administration to erase trans folks.");
	N("Hey there, Trans Lifeline volunteer. Welcome to your shift.");
	N("It's been a crazy night here.");
	N("Our call in rates have quadrupled since the memo was leaked...");
	N("Suicidal ideation is three times as high...")
	N("We have to do everything we can. Because who else will...");
	N("Anyways, looks like you're getting your first call.");
	N("How do you want to greet them?");
	
	Choose({
		"Hello and thank you for calling Trans Lifeline.": function(){
			TransWoman("Hello and thanks for calling Trans Lifeline.");
		},
		"Thanks for calling the Trans Lifeline.": function(){
			TransMan("Thanks for calling the Trans Lifeline");
		},
		"This is the Trans Lifeline. Thanks for calling.": function(){
			NonBinary("This is the Trans Lifeline.");
		}
	});
}

function TransWoman(){
	$.asked_transwoman = true;
	Clear();
	N("Hello and thanks for calling the Trans Lifeline.");
	N("How can I assist you tonight?");

	Start_TransWoman_1();
}

function TransMan(){
	$.asked_transman = true;
	Clear();
	N("Thanks for calling the Trans Lifeline. How can I help?");
	p("Hi, uh, I-I'm calling because I'm scared.");
	N("I'm here.");
	
	Start_TransMan_1();
}

function NonBinary(){
	$.asked_nonbinary = true;
	Clear();
	N("This is the Trans Lifeline. Thanks for calling.");
	N("How can I be of service?");
	p("...");
	N("Hello?");
	p("hi...i need someone to talk to...");
	N("I'm here for you.");
	
	Start_NonBinary_1();
}
