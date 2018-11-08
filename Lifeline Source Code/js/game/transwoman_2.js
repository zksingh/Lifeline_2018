// function Job(){
// 	$.asked_job = true;
// 	N("Why would you lose your job?");
// 	p("Right?! Fucking stupid. I'm the top sales executive in this company!");
// 	p("And that's not even my opinion, it's by the damn numbers.");
// 	p("I've made more money for this company that the next five employees below me combined.");
// 	p("But it doesn't matter how much I bring in, or my stellar review, or whatever...");
// 	p("All that matters is that customers will find out that they're signing contracts to 'a transgender'.");
// 	p("This country fucking disgusts me.");
// 	N("Damn.");
// 	p("What would you do?...");
// 	
// 	Choose({
// 	"Uh...well, maybe this memo has gotten to your head?": function(){
// 		MemoToHead("Uh...well, maybe this memo has gotten to your head?");
// 	},
// 	"What are your options here?": function(){
// 		Options("What are your options here?");
// 	}
// 	});
// }
// function MemoToHead(){
// 	$.asked_memotohead = true;
// 	N("Uh...well, maybe this memo has gotten to your head?");
// 	p("I'm sorry?");
// 	N("I can't imagine why they would let go of their top performer just because you're a transwoman.");
// 	N("And the memo doesn't exactly count as policy.");
// 	p("No. It counts as an endorsement of everything I'm dealing with here.");
// 	p("They sent that memo to the Supreme Court...");
// 	p("They are crystal clear that they don't care what happens to us.");
// 	N("That's true.");
// 	p("And it's not just about Trump. It's that this is winning him votes.");
// 	p("Which means there's more people who feel the same way. And that those people have power.");
// 	N("Power? What do you mean?");
// 	p("You know, the last time I had a cold, I had to call five doctors before I found one who was willing to treat me.");
// 	p("Five doctors! Before one would let a transwoman sit in their waiting room.");
// 	N("Seriously?!");
// 	p("They can do anything they want, and they know they'll get away with it.");
// 	p("This memo make it crystal clear that there's nothing I can do about it.");
// 	p("So yeah, they'll fire me, friend");
// 	
// 	Choose({
// 	"What are your options here?": function(){
// 		Options("What are your options here?");
// 	}
// 	});
// }
// function Options(){
// 	$.asked_options = true;
// 	N("What are your options here?");
// 	p("I wanted to see what you guys had. I'm...at a loss.");
// 	
// 	Choose({
// 	"Let's think about your legal options.": function (){
// 		LegalOptions("Let's think about your legal options.");
// 	},
// 	"What would moving look like for you?": function (){
// 		Moving("What would moving look like for you?");
// 	},
// 	"What about staying in the closet for the time being? Until it's safe." function (){
// 		StayInCloset("What about staying in the closet?");
// 	}
// 	});
// }
// function LegalOptions(){
// 	$.asked_legaloptions = true;
// 	N("Let's think about your legal options.");
// 	p("That's why I'm calling you.");
// 	N("Let's try to identify all of the anti-discrimination laws that can help protect you.");
// 	p("Which one should we start with? State or federal laws?");
// 	
// 	Choose({
// 	"State laws.": function(){
// 		StateLaws("State Laws.");
// 	},
// 	"Federal Laws.": function(){
// 		FederalLaws("Federal Laws.");
// 	},
// 	"What about internal policy?": function(){
// 		InternalPolicy("What about internal policy?");
// 	}
// 	});
// }
// function StateLaws(){
// 	$.asked_statelaws = true;
// 	N("State Laws.");
// 	p("Well, for starters I live in a Republican state.");
// 	N("What does that have to do with anything?");
// 	p("It means best case, the governor doesn’t give a shit.");
// 	p("Worst case, they’re doing their best to fuck us over in the name of “religious freedom.");
// 	N("I see...");
// 	
// 	Choose({
// 	"What would moving look like for you?": function (){
// 		Moving("What would moving look like for you?");
// 	},
// 	"Yeah I can see how that puts them in a tough position": function(){
// 		ToughPos("Yeah I can see how that puts them in a tough position.");
// 	},
// 	"Religious Freedom?": function (){
// 		ReligiousFreedom("Religious Freedom?");
// 	}
// 	});
// }
// function Moving(){
// 	$.asked_moving = true;
// 	N("What would moving look like for you?");
// 	p("Oh I'd just have to save up money.");
// 	N("Oh we can do that. That seems like a good solution.");
// 	p("Yeah? What do you need in order to save money, friend?");
// 	N("Uh...");
// 	p("A job. Which is half of the problem.");
// 	
// 	Choose({
// 	"Is there any way you can stay in the closet?": function (){
// 		StayInCloset("Is there any way you can stay in the closet?");
// 	}
// 	});
// }
// function FederalLaws(){
// 	$.asked_federallaws = true;
// 	N("What about federal policies?");
// 	p("Well there's the 14th amendment which states that there can be absolutely no discrimination on the basis of sex.");
// 	p("But Trump’s policy clearly states that they are not going to follow that at all.");
// 	
// 	Choose({
// 	"What about Internal Policy?": function (){
// 		InternalPolicy("What about internal policy?");
// 	}
// 	});
// }
// function StayInCloset(){
// 	$.asked_stayincloset = true;
// 	N("Is there any way you can just stay in the closet? Until it's safe?");
// 	p("Are you seriously asking me this?");
// 	p("Because I don't feel like dying of gender dysphoria and self hatred.);
// 	p("It's a very painful way to go.");
// 	N("I'm sorry, I didn't me--");
// 	p("And more than that, I shouldn't fucking have to stay in the closet.");
// 	p("I've been our for like three years outside of work. I've already started transitioning.");
// 	p("That's like asking a black person why can't they just pretend to be white.");
// 	p("I'm not the problem. The country is.");
// 	
// 	Choose({
// 	"Let's think about your legal options.": function (){
// 		LegalOptions("Let's think about your legal options.");
// 	},
// 	"What would moving look like for you?": function (){
// 		Moving("What would moving look like for you?");
// 	}
// 	});
// }
// function ToughPos(){
// 	$.asked_toughpos = true;
// 	N("Yeah I can see how that puts them in a tough position.");
// 	p("I'm sorry?");
// 	N("Well the pastors and stuff...they have rights to their beliefs too.");
// 	N("And obviously transgender activists have interests as well.");
// 	N("But when things are so polarized it's hard to weigh out both sides.");
// 	p("Both sides?! Let me simplify things for you:");
// 	p("One side wants to hide behind the Bible to do whatever they want.");
// 	p("The other wants to keep making money as a sales executive just like all the other people in the company.");
// 	p("Is that clear enough for you?");
// 	
// 	Choose({
// 	"Federal Laws.": function(){
// 		FederalLaws("Federal Laws.");
// 	},
// 	"What about internal policy?": function(){
// 		InternalPolicy("What about internal policy?");
// 	}
// 	});
// }
