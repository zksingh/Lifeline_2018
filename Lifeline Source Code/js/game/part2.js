function Start_Part_2(){
	p("Zayn? What do you think about this idea for our project?");
	N("Oh yeah, I think it could work.");
	N("We just need to modify some of the parts to make the written portion clearer.");
	p("Yeah I definitely agree. Thoughts from anyone else?");
	p("I agree with what she said about clearing up the written parts.");
	p("Same I agree with her too.");
	
	Choose({
	"Sorry but it's he.": function (){
		SorryIGoBy("Sorry but it's he.");
	},
	"Um...that's not what I go by.": function(){
		UmNot("Um...that's not what I go by.");
	},
	"...I, uh-": function () {
		Uh("...I, uh-");
	}
	});
}
function SorryIGoBy(){
	$.asked_sorryigoby = true;
	N("Sorry but it's he");
	p("Huh?");
	N("My pronouns. He/him/his not she/her/hers.");
	p("Oh uh, my bad.");
	N("Okay.");
	p("...");
	Clear();
	Start_Part_3();
}
function UmNot(){
	$.asked_umnot = true;
	N("Um...that's not what I go by");
	p("What?");
	N("I don’t go by female pronouns...you used female pronouns for me.");
	p("Oh I-I...");
	N("I use he/him/his.");
	p("Sorry my bad.");
	N("No worries.");
	Clear();
	Start_Part_3();
}
function Uh(){
	$.asked_uh = true;
	N("...I, uh-");
	p("Actually I think Zayn goes by he/him/his.");
	N("Yeah");
	p("Oh.");
	N("Yeah.");
	p("Sorry.");
	N("It's fine.");
	Clear();
	Start_Part_3();
}
