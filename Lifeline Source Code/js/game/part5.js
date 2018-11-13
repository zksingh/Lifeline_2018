function Start_Part_5(){
	p("Can I help you?");
	N("Yeah, sorry my ID just isn't working and I wanted to get into the dorm.");
	p("I'm sorry, do you go here? Or are you waiting for a friend or...");
	
	Choose({
	"Um yes I have my ID and everything to prove it.": function(){
		ProveIt("Um yes I have my ID and everything to prove it.");
	},
	"Yeah, my room's on the first floor. I'm not sure why you're asking me this.": function(){
		WhyAsk("Yeah, my room's on the first floor. I'm not sure why you're asking me this.");
	},
	"Yeah... all I want is to get back to my room.": function(){
		AllIWant("Yeah...");
	}
	});
}
function ProveIt(){
	$.asked_proveit = true;
	N("Um yes I have my ID and everything to prove it.");
	p("Can I see? This is a women's colle--");
	N("Indeed it is.But not everyone here is a woman.");
	p("Well, Just in case...");
	N("Just in case what? Fine, there. Now, can I please get in.");
	p("Yeah of course, sorry.");
	N("Sure.");
	Clear();
	Start_Part_6();
}
function WhyAsk(){
	$.asked_whyask = true;
	N("Yeah, my room's on the first floor. I'm not sure why you're asking me this.");
	p("We just want to make sure that's all.");
	N("Who's we?");
	p("I-I uh..");
	N("Or are you just afraid of the trans man that goes to the women's college?");
	p("Oh I am so sorry. I didn't know you were-");
	N("Trans? Well, the more ya know. Now, if you'll excuse me, I need to get back to my room.");
	Clear();
	Start_Part_6();
}
function AllIWant(){
	$.asked_alliwant = true;
	N("Yeah... and all I want is to get back to my room.");
	p("Ok...");
	N("Look it's not my problem if you don't believe me or if you're uncomfortable.");
	N("I am a trans man at a women's college. It happens.");
	p("... There you go. All set?");
	N("Thank you.");
	Clear();
	Start_Part_6();
}