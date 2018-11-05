// PLOT BEATS:
// 1) In medias res talking about Inception
// 2) Thanks for movie, we still up to stay over tomorrow night?
// 3) You need to stop hiding... // Can't even CALL.
// Weave in previous bits of convo pieces.
// Also, FULL CIRCLE with the Inception!
// OKAY, TOO CONVOLUTED, CUT OUT THE DIFFERENT FAMILIES & TYPO parts.

function Start_TransWoman_1(){
	
	/////// SET UP SCENE ////////

	PlaySound("bg","bedroom_1",{loop:-1});

	/////////////////////////////
	p("Hi, yeah...not sure who else I can call at this point.");
	N("What's going on?");
	p("Well, I might lose my job. Or die. So...back against the wall here.");
	
	Choose({
	"Why would you die?": function(){
		Die("Why would you die?");
	},
	"Why would you lose your job?": function(){
		Job("Why would lose your job?");
	},
	"What are your options here?": function(){
		Options("What are your options here?");
	}
	});
	
}
function Die(){
	$.asked_die = true;
	N("Why would you die?");
	p("Gender dysphoria and extreme self-hatred...assuming a MAGAt doesn't kill me off first.");
	p("I know you heard about the memo that was leaked.");
	
	Choose({
	"Memo? What memo?": function(){
		Memo("Memo? What memo?");
	},
	"Of course.": function(){
		OfCourse("Of course.");
	},
	"Let's not get ahead of ourselves here.": function(){
		NoAhead("Let's not get ahead of ourselves here.");
	}
	});
}

function Memo(){
	$.asked_memo = true;
	N("Memo? What memo?");
	p("Yeah the memo. Trump is erasing trans folks from everything.");
	N("What did he say? Can he even do that?");
	p("Trump can do anything with his army of racist, sexist, anti-LGBTQ army behind him.");
	p("He has decided to redefine the way gender is understood.");
	p("So now gender is based solely off of what genitalia you have, thus erasing us.");
	N("My God...");
	p("Yeah...and I might die. Or lose my job. Or both...");
	
	Choose({
	"Why would you lose your job?": function(){
		Job("Why would lose your job?");
	},
	"What are your options here?": function(){
		Options("What are your options here?");
	}
	});
}

function OfCourse(){
	$.asked_ofcourse = true;
	N("Of course.");
	p("Oh good.");
	N("That's why we have extra volunteers here tonight.");
	
	Choose({
	"Why would you lose your job?": function(){
		Job("Why would lose your job?");
	},
	"What are your options here?": function(){
		Options("What are your options here?");
	}
	});
}

function NoAhead(){
	$.asked_noahead = true;
	N("Let's not get ahead of ourselves. Nothing concrete has happened yet.");
	p("Oh, fuck off. We were called alarmist when Trump got elected.");
	p("Look where we are now!");
	N("...");
	p("They didn't just write that memo.");
	p("They pushed it to the Supreme Court to make them vote against a trans woman losing her job in Florida.");
	p("I can connect the dots; that'll be me if I screw up even once.");
	N("I didn't realize that.");
	
	Choose({
	"Why would you lose your job?": function(){
		Job("Why would lose your job?");
	},
	"What are your options here?": function(){
		Options("What are your options here?");
	}
	});
}
function Job(){
	$.asked_job = true;
	N("Why would you lose your job?");
	p("Right?! Fucking stupid. I'm the top sales executive in this company!");
	p("And that's not even my opinion, it's by the damn numbers.");
	p("I've made more money for this company that the next five employees below me combined.");
	p("But it doesn't matter how much I bring in, or my stellar review, or whatever...");
	p("All that matters is that customers will find out that they're signing contracts to 'a transgender'.");
	p("This country fucking disgusts me.");
	N("Damn.");
	p("What would you do?...");
	
	Choose({
	"Uh...well, maybe this memo has gotten to your head?": function(){
		MemoToHead("Uh...well, maybe this memo has gotten to your head?");
	},
	"What are your options here?": function(){
		Options("What are your options here?");
	}
	});
}
function MemoToHead(){
	$.asked_memotohead = true;
	N("Uh...well, maybe this memo has gotten to your head?");
	p("I'm sorry?");
	N("I can't imagine why they would let go of their top performer just because you're a transwoman.");
	N("And the memo doesn't exactly count as policy.");
	p("No. It counts as an endorsement of everything I'm dealing with here.");
	p("They sent that memo to the Supreme Court...");
	p("They are crystal clear that they don't care what happens to us.");
	N("That's true.");
	p("And it's not just about Trump. It's that this is winning him votes.");
	p("Which means there's more people who feel the same way. And that those people have power.");
	N("Power? What do you mean?");
	p("You know, the last time I had a cold, I had to call five doctors before I found one who was willing to treat me.");
	p("Five doctors! Before one would let a transwoman sit in their waiting room.");
	N("Seriously?!");
	p("They can do anything they want, and they know they'll get away with it.");
	p("This memo make it crystal clear that there's nothing I can do about it.");
	p("So yeah, they'll fire me, friend");
	
	Choose({
	"What are your options here?": function(){
		Options("What are your options here?");
	}
	});
}
function Options(){
	$.asked_options = true;
	N("What are your options here?");
	p("I wanted to see what you guys had. I'm...at a loss.");
	
	Choose({
	"Let's think about your legal options.": function (){
		LegalOptions("Let's think about your legal options.");
	},
	"What would moving look like for you?": function (){
		Moving("What would moving look like for you?");
	},
	"What about staying in the closet for the time being? Until it's safe." function (){
		StayInCloset("What about staying in the closet?");
	}
	});
}
function LegalOptions(){
	$.asked_legaloptions = true;
	N("Let's think about your legal options.");
	p("That's why I'm calling you.");
	N("Let's try to identify all of the anti-discrimination laws that can help protect you.");
	p("Which one should we start with? State or federal laws?");
	
	Choose({
	"State laws.": function(){
		StateLaws("State Laws.");
	},
	"Federal Laws.": function(){
		FederalLaws("Federal Laws.");
	},
	"What about internal policy?": function(){
		InternalPolicy("What about internal policy?");
	}
	});
}
function StateLaws(){
	$.asked_statelaws = true;
	N("State Laws.");
	p("Well, for starters I live in a Republican state.");
	N("What does that have to do with anything?");
	p("It means best case, the governor doesn’t give a shit.");
	p("Worst case, they’re doing their best to fuck us over in the name of “religious freedom.");
	N("I see...");
	
	Choose({
	"What would moving look like for you?": function (){
		Moving("What would moving look like for you?");
	},
	"Yeah I can see how that puts them in a tough position": function(){
		ToughPos("Yeah I can see how that puts them in a tough position.");
	},
	"Religious Freedom?": function (){
		ReligiousFreedom("Religious Freedom?");
	}
	});
}
function Moving(){
	$.asked_moving = true;
	N("What would moving look like for you?");
	p("Oh I'd just have to save up money.");
	N("Oh we can do that. That seems like a good solution.");
	p("Yeah? What do you need in order to save money, friend?");
	N("Uh...");
	p("A job. Which is half of the problem.");
}