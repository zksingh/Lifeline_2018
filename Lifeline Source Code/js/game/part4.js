function Start_Part_4(){
	p("I read the poem you published on Medium.");
	N("Oh yeah? Did you like it?");
	p("It was wonderful.");
	N("Thank you...it was hard for me to write. Dysphoria isn't easy to write about or talk about, so..");
	p("Yeah but you did it. I'm proud of you.");
	N("Thanks.");
	N("I'm going to look and see who else clapped and commented on it.");
	Wait(500);
	N("Oh shit.");
	p("What?");
	N("Some asshole responded to my poem.");
	p("What did he say?");
	N("'have you ever considered that you're just mentally ill? Transgenderism is not real.'");
	p("You need to respond to him. Fight for yourself.");
	N("Okay I'm thinking of something.");
	
	Choose({
	"If I was mentally ill for being trans, then explain to me why I am so much happier on T than I wasn't?": function(){
		ImSorrySir("If I was mentally ill..");
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
	N("If I was mentally ill for being trans, then can you please explain to me why I am so much happier on T than I wasn't?");
	p("You're not happier, you're just tricking yourself. T doesn't do anything but defile your body.");
	p("No one is actually a transsexual. It's just mental illness.");
	p("Why would you expect everyone to cater to your delusions.. especially has less than 1% of the population.");
	N("A few things:");
	N("1) T causes emotional instability in cis men and cis women, but stability in trans men.");
	N("2) Because of this new stability, my quality of life has greatly improved. I am no longer depressed, anxious, or suicidal.");
	N("3) I am a hell of a lot more productive in every sector of my life. I'm doing well in college, and have already secured for myself a future in tech.");
	N("I'm in a stable relationship and am excited to contribute to my society.")
	N("I am quite happy. All you have to show for yourself is lurking in the comments of my poetry. Are you happy?")
	N("Go find someone else to troll :) ");
	Clear();
	Start_Part_5();
}
function HelloSir(){
	$.asked_hellosir = true;
	N("Hello, I hope you enjoyed reading my entire poem just to tell me I was mentally ill. Here is a link to a peer-reviewed study you can read as to why your stance is ill-informed.");
	p("None of these statistics even make sense.");
	p("This is all fake science.");
	p("You are still mentally ill. Therefore I find it unfair that we all have to cater to your lunacy.");
	N("It's troubling that to you, Stanford University is a fake institution with no credibility.");
	N("I never once asked cisgender folks to suddenly bow down at my feet.");
	N("I do expect them to use my pronouns.. but I can see why you would personally find it difficult, after how well you read that study.");
	N("Regardless, it's safe to say that you are not catering to any of my 'lunacy'.");
	N("Rather I am doing what I need to do to live my fullest life. If you can't handle that, then I'd suggest you find someone else to troll.");
	N("Or don't. You're getting my views up, anyway :)")
	Clear();
	Start_Part_5();
}
function HiThanks(){
	$.asked_hithanks = true;
	N("Hi thanks for reading my piece. I just want to ask, what did you hope to accomplish by responding?");
	p("To help you realize you're being led astray by fake science and to help convert you back to your true self which is a woman.");
	N("..Charming. Please find someone else to troll.");
	N("I love myself and I love who I am.");
	N("I am a trans man and you will not erase me.");
	Clear();
	Start_Part_5();
}