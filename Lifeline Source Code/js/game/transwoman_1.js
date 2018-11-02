// PLOT BEATS:
// 1) In medias res talking about Inception
// 2) Thanks for movie, we still up to stay over tomorrow night?
// 3) You need to stop hiding... // Can't even CALL.
// Weave in previous bits of convo pieces.
// Also, FULL CIRCLE with the Inception!
// OKAY, TOO CONVOLUTED, CUT OUT THE DIFFERENT FAMILIES & TYPO parts.

function Start_TransWoman_1(){
	
	/////// SET UP SCENE ////////

	

	/////////////////////////////
	p("I just don't know what to do anymore.");
	Wait(500);
	p("I'm a 45 year old trans woman who's going to get fired from her job because I'm trans");
	p("I'm in a marriage where my wife does not love me because I transitioned.");
	p("I don't even have access to good health care anymore. Trump has taken it away.");
	p("It all just feels...");
	Wait(500);
	p("...hopeless");
	
	Choose({
		"Should we discuss the issues with your job first?": function(){
			Job("Should we discuss the issues with your job first?");
		},
		"Do you want to talk more about your marriage?": function(){
			Marriage("Do you want to talk about your marriage?");
		},
		"Would you like to talk more about the healthcare stuff?": function(){
			Healthcare("Would you like to talk more about healthcare?");
		}
	});
}
function Job(){
	$.asked_job = true;
	N("Should we discuss the issues with your job first?");
	p("Doesn't matter...I'm going to get fired.");
	N("Mhmm...");
	p("I worked hard for this job, you know?");
	p("And now they are taking it away from me.");
	p("As if nothing I've done for the past 15 years mattered.");
	p("Once they find out your trans, it's over.");
	
	Choose({
		"Let's discuss your options.": function(){
			Options("Let's discuss your options.");
		},
		"How are you feeling about all of this?": function(){
			Feeling("How are you feeling about all of this?");
		},
		"What can I do to help?": function(){
			Help("What can I do to help?");
		}
	
	});
}
function Marriage(){
	$.asked_marriage = true;
	N("Do you want to talk more about your marriage?");
	p("I mean what am I supposed to say?");
	p("I'm the man who ruined my wife's marriage all because I found out that, well...");
	Wait(500);
	p("...that I'm not a man. I'm a woman.");
	p("And now she hates me for it. Even though I love her so much");
	
	
}