// PLOT BEATS:
// 1) In medias res talking about Inception
// 2) Thanks for movie, we still up to stay over tomorrow night?
// 3) You need to stop hiding... // Can't even CALL.
// Weave in previous bits of convo pieces.
// Also, FULL CIRCLE with the Inception!
// OKAY, TOO CONVOLUTED, CUT OUT THE DIFFERENT FAMILIES & TYPO parts.

// function Start_TransWoman_1(){
// 	///// SET UP SCENE ////////
// 
// 	PlaySound("bg","bedroom_1",{loop:-1});
// 
// 	///////////////////////////
// 	p("Hi, yeah...not sure who else I can call at this point.");
// 	N("What's going on?");
// 	p("Well, I might lose my job. Or die. So...back against the wall here.");
// 	
// 	Choose({
// 	"Why would you die?": function(){
// 		Die("Why would you die?");
// 	},
// 	"Why would you lose your job?": function(){
// 		Job("Why would lose your job?");
// 	},
// 	"What are your options here?": function(){
// 		Options("What are your options here?");
// 	}
// 	});
// 	
// }
// function Die(){
// 	$.asked_die = true;
// 	N("Why would you die?");
// 	p("Gender dysphoria and extreme self-hatred...assuming a MAGAt doesn't kill me off first.");
// 	p("I know you heard about the memo that was leaked.");
// 	
// 	Choose({
// 	"Memo? What memo?": function(){
// 		Memo("Memo? What memo?");
// 	},
// 	"Of course.": function(){
// 		OfCourse("Of course.");
// 	},
// 	"Let's not get ahead of ourselves here.": function(){
// 		NoAhead("Let's not get ahead of ourselves here.");
// 	}
// 	});
// }
// 
// function Memo(){
// 	$.asked_memo = true;
// 	N("Memo? What memo?");
// 	p("Yeah the memo. Trump is erasing trans folks from everything.");
// 	N("What did he say? Can he even do that?");
// 	p("Trump can do anything with his army of racist, sexist, anti-LGBTQ army behind him.");
// 	p("He has decided to redefine the way gender is understood.");
// 	p("So now gender is based solely off of what genitalia you have, thus erasing us.");
// 	N("My God...");
// 	p("Yeah...and I might die. Or lose my job. Or both...");
// 	
// 	Choose({
// 	"Why would you lose your job?": function(){
// 		Job("Why would lose your job?");
// 	},
// 	"What are your options here?": function(){
// 		Options("What are your options here?");
// 	}
// 	});
// }
// 
// function OfCourse(){
// 	$.asked_ofcourse = true;
// 	N("Of course.");
// 	p("Oh good.");
// 	N("That's why we have extra volunteers here tonight.");
// 	
// 	Choose({
// 	"Why would you lose your job?": function(){
// 		Job("Why would lose your job?");
// 	},
// 	"What are your options here?": function(){
// 		Options("What are your options here?");
// 	}
// 	});
// }
// 
// function NoAhead(){
// 	$.asked_noahead = true;
// 	N("Let's not get ahead of ourselves. Nothing concrete has happened yet.");
// 	p("Oh, fuck off. We were called alarmist when Trump got elected.");
// 	p("Look where we are now!");
// 	N("...");
// 	p("They didn't just write that memo.");
// 	p("They pushed it to the Supreme Court to make them vote against a trans woman losing her job in Florida.");
// 	p("I can connect the dots; that'll be me if I screw up even once.");
// 	N("I didn't realize that.");
// 	
// 	Choose({
// 	"Why would you lose your job?": function(){
// 		Job("Why would lose your job?");
// 	},
// 	"What are your options here?": function(){
// 		Options("What are your options here?");
// 	}
// 	});
// }
