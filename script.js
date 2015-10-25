Sparky = {};

Sparky.surreality = 0;

Sparky.careers = [' sheikh', ' pilot', ' playboy', ' philanthropist', ' scientist', ' fireman', ' detective', ' chef', ' prince', ' jockey', ' magnate', ' real estate developer', ' retired marine', ' pirate king', ' basketball player', ' Hollywood star', ' actor', ' singer', ' pilot', ' soldier', ' freedom fighter', ' lawyer', ' rogue', ' scoundrel', ' earl', ' duke', ' count'];

Sparky.surnames = [' Steele', ' Titanium', ' Caffrey', ' Rankin', " Cullen", " Grey", " Pascal", ' Walton', ' Fox', ' Meldrum' , ' Lopez' , ' Ramirez' , ' Ramage' , ' Cholmondley' , ' Wimsey' , ' Rebus' , ' Rankin' , ' Patterson' , ' Goldberg' , ' Dresden' , ' Martin' , ' Collins' , ' Hudson' , ' Brett' , ' Heyer' , ' Howard'];

Sparky.male_names = [' Lexington', ' Remington', ' Marc', ' Robert', ' Stephen', ' Alex', ' Rufus', ' Paul', ' Alec', ' Robert', ' John', ' Miles', ' Carlos', ' Hector', ' Adrian' , ' Toby' , ' Hunter' , ' Greg' , ' Cooper' , ' Simon' , ' Julio' , ' Jaime' , ' Alan' , ' Walter' , ' Nicholas' , ' Leighton' , ' Alejandro' , ' Antonio' , ' Saul' , ' Luther' , ' Clark' , ' Luke'];

Sparky.female_names = [' Anna', ' Bella', ' Sophie', ' Elizabeth', ' Helen', ' Nicola', ' Julia', ' Charlotte' , ' Emma' , ' Tiffany' , ' Amy' , ' Sookie' , ' Bridget' , ' Hannah' , ' Ruth' , ' Nicole' , ' Nicola' , ' Becky' , ' Rebecca' , ' Josie' , ' Zara' , ' Helen' , ' Nora'];

Sparky.locations = [
{text:' a desert island', prep:' on'},
{text:' a yacht', prep:' on'},
{text:' a garden center', prep:' in'},
{text:' a ski resort', prep:' in'},
{text:' a desert', prep:' in'},
{text:' a vast forest', prep:' in'},
{text:' a vegan bakery', prep:' in'},
{text:' the big city', prep:' in'},
{text:' a quiet village', prep:' in'},
{text:' a ranch', prep:'on'},
{text:' a multinational corporation', prep:' in'},
{text:' a struggling inner-city school', prep:' in'}];

Sparky.male_adjectives = [' bored', ' cold-hearted', ' stern', ' driven', ' charming', ' heartbroken', ' widowed', ' billionaire', ' infuriating', ' reclusive', ' foreign', ' soft-spoken', ' rugged' , ' invalid' , ' genius' , ' dazzling' , ' intoxicating' , ' kissable' , ' lonely' , ' wealthy' , ' athletic' , ' sophisticated' , ' sardonic' , ' sarcastic' , ' explosive' , ' maverick' , ' hostile' , ' French' , ' Spanish' , ' British' , ' heartless' , ' thoughtless' , ' careless' , ' immoral' , ' charismatic' , ' twisted' , ' dashing' , ' suave' , ' handsome' , ' tall' , ' dark' , ' dangerous' , ' dominant' , ' illiterate' , ' domineering'];

Sparky.female_adjectives = [' bespectacled,', ' shy,', ' lonely,', ' clumsy,', ' outspoken,', ' career-minded,', ' hopelessly romantic,', ' nervous,', ' gorgeous,', ' talented,', ' plump,', ' dull,', ' career-focused,', ' scatter-brained,', ' capable,', ' blonde,', ' brunette,', ' red-headed,', ' freckled,', ' tempestuous,', ' politically active,', ' driven,', ' svelte,', ' street-smart,', ' tomboyish,', ' strait-laced,', ' generous,', ' homesick,', ' animal-loving,', ' over-worked,', ' wrongly accused,', ' gold-digging,', ' newly single,', ' middle-aged,', ' inexperienced,', ' naive,', ' hopeful,'];

Sparky.surreal_female_adjectives = [' partially paralysed,', ' radioactive,', ' two-headed,', ' bloodthirsty,', ' reanimated,', ' polygonal,', ' half-goat,', ' cursed,', ' ethereal,', ' aquatic,', ' fire-breathing,', ' scaled,', ' amphibious,', ' hyperspace-capable,', ' sub-atomic,', ' sorcerous,', ' rugose,', ' squamous,', ' prophecied,', ' half-demon,', ' vampiric,', ' undead,', ' many-legged,', ' many-eyed,', ' furry,', ' cloven-hooved,', ' metallic,', ' positronic,', ' ambulatory,', ' hunchbacked,', ' misshapen,', ' malevolent,', ' divinely-inspired,', ' incorporeal'];

Sparky.situational_phrases = [' ends up', ' finds herself'];

Sparky.predicaments = [
{text: " stranded", prep: "yes"},
{text: " managing"},
{text: " imprisoned", prep: "yes"},
{text: " running"},
{text: " working", prep: "yes"}
];

Sparky.pick = function(e){
	return e[Math.floor(Math.random() * e.length)];
};

Sparky.complex_pick = function(e, i){
    var choice = Math.floor(Math.random() * 2)
    if (choice) {
        return i[Math.floor(Math.random() * i.length)];
    }
	else {
        return e[Math.floor(Math.random() * e.length)];
    }
};

Sparky.generate = function(){
    var blurb = this.create_blurb();
	$('#box').html(blurb);
};

Sparky.create_blurb = function(){
    if (this.surreality) {
        var adjective_1 = this.complex_pick(this.female_adjectives, this.surreal_female_adjectives);
    	var adjective_2 = this.complex_pick(this.female_adjectives, this.surreal_female_adjectives);
    }
    else {
    	var adjective_1 = this.pick(this.female_adjectives);
    	var adjective_2 = this.pick(this.female_adjectives);
    }
    while(adjective_1 === adjective_2){
    	adjective_2 = this.pick(this.female_adjectives)
    }
    adjective_2 = adjective_2.slice(0, -1)
    var predicament = this.pick(this.predicaments)
    var location = this.pick(this.locations)
    var preposition = " " + location.prep;
    if (!predicament.prep){
    	preposition = "";
    };
    
	var blurb = "When " + adjective_1 + adjective_2 + this.pick(this.female_names) + this.pick(this.situational_phrases) + predicament.text + preposition + location.text + " with" + this.pick(this.male_adjectives) + this.pick(this.careers) + this.pick(this.male_names) + this.pick(this.surnames) + ", sparks fly.";
	
    return blurb; 
};

Sparky.toggle_surreality = function(surreality){
	Sparky.surreality = surreality;
};

$("#surreal").change(function() {
    if(this.checked) {
        Sparky.toggle_surreality(1);
    }
    else {
    	Sparky.toggle_surreality(0)
    }
});

$('#generate').click(function(){
	Sparky.generate();
});

$('.about').click(function(){
    $('#overlay').toggle();
	$('#about_card').toggle();
});

$('#overlay').hide();
$('#about_card').hide();
Sparky.generate();
