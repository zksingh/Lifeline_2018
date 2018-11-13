function Start_Part_6(){
	p("Hey, are you back in your room safely?");
	N("Hey... yeah, I am.");
	N("Except for the part where my PIN code wasn't working and this administrator wouldn't let me in...");
	N("All because she didn't believe I went to school here.");
	p("What?!");
	N("Yeah...");
	p("Are you ok?");
	
	Choose({
	"I'm pissed": function (){
		Pissed("I'm pissed.");
	},
	"No not at all.": function(){
		NotAtAll("No not at all.");
	},
	"I'm fine.": function (){
		Fine("I'm fine.");
	}
	});
}
function Pissed(){
	$.asked_pissed = true;
	N("I'm pissed.");
	p("Yeah I would be too. That's some real BS.");
	N("Yeah it really is. If I say I go here I go here.");
	N("Plus I wouldn't be trying to get into a dorm if I didn't live there. People aren't that crazy.");
	p("True.");
	N("Yeah.");
	p("I'm really sorry that happened to you.");
	N("Yeah me too. This college let me down big time.");
	N("Just fucking erase us already. Clearly we don't matter.");
	p("No, Zayn. You can't have that attitude.");
	N("I know. It's just so hard not to give up.");
	p("I know.");
	N("Yeah..");
	Clear();
	Start_Outro();
}
function NotAtAll(){
	$.asked_notatall = true;
	N("No not at all.");
	p("Is there anything I can do?");
	N("No");
	p("Are you sure? Is there anyone I can talk to or...?");
	N("No, no one will believe me anyways. I just have to deal with it.");
	p("What about telling a dean?");
	N("The person who wouldn't let me in was in admin.");
	N("I don't think telling another person in admin that their colleague wouldn't let a student into a building will be very convincing.");
	p("I guess.");
	N("Yeah...");
	Clear();
	Start_Outro();
}
function Fine(){
	$.asked_fine = true;
	N("I'm fine.");
	p("Are you being honest with me?");
	N("I mean how else can I feel? Of course it's not fine at all.");
	N("But I can't do much about it.");
	N("There are going to be people like her everywhere.");
	N("I can't spiral down because of an ignorant person.");
	N("Just have to keep fighting, keep pushing.");
	p("Yeah...");
	N("Yeah.");
	Clear();
	Start_Outro();
}