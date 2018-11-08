function Start_Part_3(){
	p("How was class?");
	N("It was fine.");
	N("How was practice?");
	p("It was fine...are you sure class was ok?");
	N("Actually no I'm not.");
	N("I got misgendered again.");
	p("Again?");
	N("Again.");
	N("How fucking hard is it to remember a person's pronouns.");
	N("And if you don't know how hard is it to ask?");
	p("It's not hard at all babe people are just stupid and inconsiderate.");
	N("I mean what about me looks like a girl?");
	N("My voice is an octave lower than it used to be. I am on T.");
	N("I don't know what else I need to do in order to pass.");
	p("I know baby, I know.");
	
	Choose({
	"No you don't. You don't know and you won't know.": function(){
		NoYouDont("No you don't.");
	},
	"Maybe I'm just overreacting.": function (){
		MaybeOverreact("Maybe I'm just overreacting.");
	},
	"I hate that I don't pass...": function (){
		IHate("I hate that I don't pass...");
	}
	});
}
function NoYouDont(){
	$.asked_noyoudont = true;
	N("No you don't. You don't know and you won't know.");
	p("I never said I would. I'm saying that I recognize how hard it is.");
	p("Please don't get frustrated with me.");
	N("I'm sorry for snapping. That wasn't right.");
	p("It's ok...Are you sure you're ok?");
	N("Honestly, I don't think so.");
	N("The memo and the fact that Trump is actively erasing trans folks makes the misgendering even worse.");
	N("When people misgender me it feels like they're trying to erase me too.");
	N("Whether they mean to or not...");
	p("Yeah...people are shitty.");
	N("Yeah...");
	Clear();
	Start_Part_4();
}
function MaybeOverreact(){
	$.asked_maybeoverreact = true;
	N("Maybe I'm just overreacting.");
	p("No you're not. You're just asking for common respect and decency.");
	p("Every cis person gets that. You deserve it too.");
	N("Yeah, it just feels impossible to get.");
	p("It's not. You just have to keep sticking up for yourself.")
	N("It's hard to when it feels like people don't even make an effort, you know?");
	N("And with the memo being leaked and all, the misgendering feels even worse.");
	N("It feels like they are trying to erase me too whether they mean to or not.");
	p("Yeah I understand.");
	N("Yeah...");
	Clear();
	Start_Part_4();
}
function IHate(){
	$.asked_ihate = true;
	N("I hate that I don't pass...");
	p("At least you're on T though, right?");
	p("There are so many trans folks who can't even be on HRT because it's too expensive.");
	p("Or it's too dangerous for them to come out.");
	p("Or they have health problems, the list goes on.");
	N("I know. And I'm not saying that I'm not grateful to be able to transition.");
	N("I'm just frustrated that people can't even respect the gender I am actively performing.");
	N("I am a man yet when others misgender me I feel like less of one.");
	N("Like I'm a fake.");
	p("Baby, you're as much of a man, if not more of a man, than anybody else.");
	p("I promise you.");
	p("People are shitty. But you are a man and you do pass. Some people will just stay ignorant.");
	N("Yeah...");
	Clear();
	Start_Part_4();
}