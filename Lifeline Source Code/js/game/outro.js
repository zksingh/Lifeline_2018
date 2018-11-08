// Then we broke up soon/X...
// Three stories (Lie / Truth / Half-truth) ... one interaction with each.
// Did you skip or not? Tie that into the sections.
// Your final choice, a whaaaaaat.

function Start_Outro(){

	// Just clear dialogue & stuff.
	queue(ClearScene,0);
	
	/////// SET UP SCENE ////////

	Show("background","coffeehouse_2");
	Show("cup","cup_steam",{x:44,y:359});
	Show("nicky","coffee_nicky_still");

	PlaySound("bg","coffeehouse",{loop:-1, volume:0.7});

	///////////////////////////////

	N("Dear Player,");
	N("Welcome to the outro.");
	N("I wrote this game in a response to the transphobia I experience on a daily basis.");
	N("The leaked memo from the Trump Administration doesn't make it any better.");
	N("This was a chance for you all to walk in my shoes, regardless of how you identify.");
	N("Everyone perpetuates transphobia whether they know it or not.");
	N("And the mental repercussions of it on trans folks is horrible.");
	N("So I am asking for us to be more aware of who we are with.");
	N("And to realize that each one of us holds different identities.");
	N("Cis folks, please become allies to your trans classmates, coworkers, friends, and family.");
	N("Transphobes please find something better to do with your time than troll us.");
	N("And to my trans brothers and sisters,");
	N("We may have lost this battle, but in the end we will win the war.");
	Clear();
	N("<b>LIFELINE 2018</b>");
}


