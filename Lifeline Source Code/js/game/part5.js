function Start_Part_5(){
	p("Can I help you?");
	N("Yeah sorry my ID just isn't working and I wanted to get into the dorm.");
	p("I'm sorry, do you go here? Or are you waiting for a friend or...");
	
	Choose({
	"Um yes I have my ID and everything to prove it.": function(){
		ProveIt("Um yes I have my ID and everything to prove it.");
	},
	"Yes and I'm not sure why you're asking me this.": function(){
		WhyAsk("Yes and I'm not sure why you're asking me this.");
	},
	"Yes I go here and all I want is to get back to my room.": function(){
		AllIWant("Yes I go here.");
	}
	});
}
function ProveIt(){
	$.asked_proveit = true;
	N("Um yes I have my ID and everything to prove it.");
	p("Can I see? This is a women's colle--");
	N("Why? I just told you I have my ID.");
	p("Just in case...");
	N("Just in case what? Fine there now can I please get in.");
	p("Yeah of course sorry.");
	N("Whatever.");
	Clear();
	Start_Part_6();
}
function WhyAsk(){
	$.asked_whyask = true;
	N("Yes and I'm not sure why you're asking me this.");
	p("We just want to make sure that's all.");
	N("Who's we?");
	p("I-I uh..");
	N("Or are you just afraid of the trans man that goes to the women's college?");
	p("Oh I am so sorry. I didn't know you were-");
	N("Trans? Yeah. Now if you'll excuse me, I need to go back to my room.");
	Clear();
	Start_Part_6();
}
function AllIWant(){
	$.asked_alliwant = true;
	N("Yes I go here and all I want is to get back to my room.");
	p("Ok...");
	N("Look it's not my problem if you don't believe me or if you're uncomfortable.");
	N("I am a trans man at a women's college. Please deal with it.");
	p("...");
	N("Thank you.");
	Clear();
	Start_Part_6();
}