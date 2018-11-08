function Start_Part_4(){
	p("I read the poem you published on Medium.");
	N("Oh yeah? Did you like it?");
	p("It was wonderful.");
	N("Thank you...it was hard for me to write. Dysphoria isn't easy to write about or talk about so.");
	p("Yeah but you did it. I'm proud of you.");
	N("Thanks.");
	N("I'm going to look and see who else clapped and commented on it.");
	Wait(500);
	N("Oh shit Gloria.");
	p("What?");
	N("Some asshole transphobe responded to my poem.");
	p("What did he say?");
	N("'have you ever considered that you're just mentally ill? Transgenderism is not real.'");
	p("You need to respond to him. Fight for yourself.");
	N("Okay I'm thinking of something.");
	
	Choose({
	"I'm sorry sir but if I was mentally ill for being trans, then can you please explain to me why I am so much happier on T than I was when I was not on it?": function(){
		ImSorrySir("I'm sorry sir but..");
	},
	"Hello, I hope you enjoyed reading my entire poem just to tell me I was mentally ill. Here is a link to a real study you can read as to why you're information is false.": function(){
		HelloSir("Hello, I hope you enjoyed reading my poem...");
	},
	"Hi thanks for reading my piece. I just want to ask, what did you hope to accomplish by responding?": function (){
		HiThanks("Hi thanks for reading my piece...");
	}
	});
}
function ImSorrySir(){
	$.asked_imsorrysir = true;
	N("I'm sorry sir but if I was mentally ill for being trans, then can you please explain to me why I am so much happier on T than I was when I was not on it?");
	p("You're not happier you're just tricking yourself. T doesn't do anything and you transitioning is stupid and a mistake.");
	p("No one is actually trans. It's just mental illness.");
	p("Plus you people only make up 1% of the population, so. Again, you're mentally ill.");
	N("A few things:");
	N("1) T causes instability in cis men and stability in trans men.");
	N("2) Because of this new stability my quality of life has greatly improved. I no longer am depressed, anxious, or suicidal.");
	N("3) I am a hell of a lot more productive in every sector of my life. Therefore, I am not mentally ill but in fact quite stable.");
	N("And I am quite happy. If you have a problem with that, find someone else to troll.");
	Clear();
	Start_Part_5();
}
function HelloSir(){
	$.asked_hellosir = true;
	N("Hello, I hope you enjoyed reading my entire poem just to tell me I was mentally ill. Here is a link to a real study you can read as to why you're information is false.");
	p("None of these statistics even make sense.");
	p("This is all fake science.");
	p("You are still mentally ill. Therefore I find it unfair that we all have to cater to your lunacy.");
	N("I'm sorry you think that Stanford University is a fake institution with no credibility.");
	N("I never once asked cisgender folks to suddenly bow down at my feet.");
	N("I don't even expect them to use my correct pronouns. Therefore, you are not catering to any of my 'lunacy'.");
	N("Rather I am doing what I need to do to live my fullest life. If you can't handle that, then I'd suggest you find someone else to troll.");
	Clear();
	Start_Part_5();
}
function HiThanks(){
	$.asked_hithanks = true;
	N("Hi thanks for reading my piece. I just want to ask, what did you hope to accomplish by responding?");
	p("To help you realize you're being led astray by fake science and to help convert you back to your true self which is a woman.");
	N("Thank you but I think I'll pass. Please find someone else to troll.");
	N("I love myself and I love who I am.");
	N("I am a trans man and you will not erase me.");
	Clear();
	Start_Part_5();
}