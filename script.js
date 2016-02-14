$( document ).ready(function(){
	Sparky = {};

	//The following lines are all of the lists needed for the generator to work. Each subgenre is an object which stores all its options, and they are added together later in the generator. Each subgenre has the basic format as follows:
	//Sparky.generic = {
		//chosen : "no",
		//attributes_1 : [],
		//identities_1 : [],
		//names_1 : [],
		//situation_verbs: [],
		//verbs : [{text: '', prep: ''}],
		//locations : [{text: '', prep: ''}],
		//attributes_2: [],
		//identities_2: [],
		//names_2: [],
		//surnames: []
		//};

	Sparky.general = {
		chosen : "yes",
		attributes_1 : ['lonely','feisty','attractive','heartbroken','optimistic','pessimistic','confident','scatter-brained','flighty','vivacious','beautiful','gorgeous','independent','pretty','ditsy','charming','sunny-tempered','naive','stubborn','adorable','sweet-natured'],
		identities_1 : ["brunette","blonde","red-head", "single", "widow"],
		names_1 : ["Hilda","Rose", "Lucy",'Anna', 'Bella', 'Sophie', 'Elizabeth', 'Helen', 'Nicola', 'Julia','Charlotte' , 'Emma', 'Amy', 'Bridget' , 'Hannah' , 'Ruth', 'Nicole', 'Rebecca', 'Helen' , 'Nora'],
		situation_verbs: ["ends up","winds up", "finds herself"],
		verbs : [{text: "stranded", prep: "yes"},
	{text: "managing"},
	{text: "imprisoned", prep: "yes"},
	{text: "working", prep: "yes"}],
		locations : [{text:'a desert island', prep:'on'},
	{text:'a yacht', prep:' on'},
	{text:'a garden center', prep:'in'},
	{text:'a ski resort', prep:'in'},
	{text:'a desert', prep:'in'},
	{text:'a vast forest', prep:'in'},
	{text:'a vegan bakery', prep:'in'},
	{text:'the big city', prep:'in'},
	{text:'a quiet village', prep:'in'}],
		attributes_2: ['controlling','bearded','bored', 'cold-hearted', 'stern', 'driven', 'charming', 'heartbroken', 'widowed','infuriating', 'reclusive', 'foreign', 'soft-spoken', 'rugged' , 'invalid' , 'genius' , 'dazzling' , 'intoxicating' , 'kissable' , 'lonely' , 'wealthy' , 'athletic' , 'sophisticated' , 'sardonic' , 'sarcastic' , 'explosive', 'hostile' , 'French' , 'Spanish' , 'British' , 'heartless' , 'thoughtless' , 'careless' , 'immoral' , 'charismatic' , 'twisted' , 'dashing' , 'suave' , 'handsome' , 'tall' , 'dark' , 'dangerous', 'domineering','autocratic'],
		identities_2: ['stranger','newcomer','cad','heart-throb','charmer',''],
		names_2: ['James','Rufus','Jean-Claude','Titus','Charles','Robert','Remington','Alec','Alex','Alan','Thomas','Mark','Marc','Benjamin','Benedict','Dominic','Leon','Jonathan','John','Derek','Stephen','Harold','Harry','Philip','Rupert','Nathan','Simon','David','William','Paul','Miles','Carlos','Hector','Adrian','Gregory','Julio','Luke','Clark','Alejandro','Nicholas','Luther','Saul'],
		surnames: ["Smith", 'Steele', 'Titanium', 'Caffrey', 'Rankin', "Cullen", "Grey", "Pascal", 'Walton', 'Fox', 'Meldrum' , 'Lopez' , 'Ramirez' , 'Ramage' , 'Cholmondley' , 'Wimsey' , 'Rebus' , 'Rankin' , 'Patterson' , 'Goldberg' , 'Dresden' , 'Martin' , 'Collins' , 'Hudson' , 'Brett' , 'Heyer' , 'Howard', 'Moylett','Wayne','Kent','Morales']
	};

	Sparky.western = {
		chosen : "no",
		attributes_1 : [],
		identities_1 : ['schoolmarm'],
		names_1 : ['Annie','Jane'],
		situation_verbs: [],
		verbs : [{text: 'working a claim', prep: 'yes'},{text: 'herding cattle', prep: 'yes'},{text: 'scouting ahead', prep:'yes'}],
		locations : [{text: 'a mining claim', prep: 'in'},{text: 'a saloon', prep: 'in'},{text: 'a ranch', prep: 'on'},{text: 'a stagecoach', prep: 'in'},{text: 'the town gaol', prep: 'in'}],
		attributes_2: ['Confederate','Yankee','silent','dead-eyed','quick-drawing','rough','fast-talking','illiterate'],
		identities_2: ['bandit','lawman','sheriff','prospector','card sharp','gun-runner','miner', 'outlaw','rancher','cowboy','cattle rustler','jerkline skinner','Colonel','scout','gun-slinger','rancher'],
		names_2: ['Buck','Hunter','Cooper','Diego','Tito','Butch','Ned'],
		surnames: ['Kelly','Cassidy','Hickok','Henry','Drebber',"L'amour",'Barlow']
	};

	Sparky.adult = {
		chosen : "no",
		attributes_1 : ['repressed','free-spirited','virginal','busty','innocent','liberated','barely legal','submissive'],
		identities_1 : ['virgin','dominatrix','French maid','secretary','older woman','nurse','divorcée','submissive','inner Goddess'],
		names_1 : ['Tiffany','Chastity'],
		situation_verbs: [],
		verbs : [{text: 'living in sin', prep: 'yes'}],
		locations : [{text: 'a dungeon', prep: 'in'},{text: 'the red light district', prep: 'in'},{text: 'a luxurious bed', prep: 'in'}, {text: 'a bearskin rug', prep: 'on'}],
		attributes_2: ['smouldering','depraved','repressed','liberated'],
		identities_2: ['Marquis','flagellant','sadist','masochist'],
		names_2: ['Leopold'],
		surnames: ['De Sade','Von Sader-Masoch','Lawrence']
	};

	Sparky.paranormal = {
		chosen : "no",
		attributes_1 : ['psychic','sorcerous','cursed','half-fairy'],
		identities_1 : ['psychic','witch','monster hunter','vampire hunter','slayer','werewolf','vampire','necromancer','nymph','half-fairy','succubus'],
		names_1 : ['Sookie','Raven','Anita'],
		situation_verbs: [],
		verbs : [],
		locations : [{text: 'Carfax Abbey', prep: 'in'}, {text :'Nether London', prep: 'in'}, {text :'the place between', prep: 'in'}],
		attributes_2: ['cursed','sorcerous','tormented'],
		identities_2: ['werewolf','vampire','zombie','dragon','dhampir','vampire hunter','hunter','wizard','sorceror','Knight Templar','warlock','necromancer','half-demon'],
		names_2: ['Lou'],
		surnames: ['Dresden','Thompson','Daniels','Stackhouse','Grant','Constantine','Rice','Blake','Winchester','Alucard']
	};

	Sparky.professional = {
		chosen : "no",
		attributes_1 : ['career-minded','driven','over-worked','stressed','professional','aspiring'],
		identities_1 : ['secretary','journalist','nurse','translator','charity worker','author','illustrator','barista','teacher'],
		names_1 : [],
		situation_verbs: [],
		verbs : [],
		locations : [{text:'a multinational corporation', prep:'in'},{text:'the big city', prep:'in'},{text:'an executive bathroom', prep:'in'},	{text:'a yacht', prep:'on'},{text:'a struggling inner-city school', prep:'in'}],
		attributes_2: ['wealthy','driven','high-powered','professional'],
		identities_2: ['billionaire','millionaire','executive','jockey','editor','journalist','shipping magnate','CEO','doctor','surgeon','neurosurgeon','sheikh','philanthropist'],
		names_2: ['Clayton'],
		surnames: []
	};

	Sparky.thriller = {
		chosen : "no",
		attributes_1 : [],
		identities_1 : ['translator','aid worker','investigative journalist','research assistant','scientist','doctor'],
		names_1 : ['Modesty'],
		situation_verbs: [],
		verbs : [],
		locations : [{text: 'a submarine', prep: 'in'},{text: 'a missile silo', prep: 'in'},{text: 'a volcanic lair', prep: 'in'},{text: 'a war-torn country', prep: 'in'},{text: 'a crashed plane', prep: 'in'},{text: 'a UN summit', prep: 'in'}],
		attributes_2: ['insane','mad','suave','dangerous','mysterious','falsely accused','maverick','lawless','haunted','disgraced','inscrutable','undercover'],
		identities_2: ['spy','superspy','anarchist','cop','detective','gumshoe','private investigator','marine','soldier','pilot','scientist','fireman','policeman','mercenary','soldier of fortune','dictator','freedom fighter','symbologist'],
		names_2: [],
		surnames: ['Reed','Bond','Leiter','Evanovich','Marlowe','Christie','Vane','Holmes','Watson','Bosch','Castle','Beckett','Jayne','Bourne','Blaise',"'O'Hare",'Fox','Rigsby','Clancy','Crichton']
	};
Sparky.historical = {
		chosen : "no",
		attributes_1 : ['impoverished','highly-strung'],
		identities_1 : ['nonpareil','debutante','orphan','ward','governess',"lady's companion",'lady','countess'],
		names_1 : ['Georgina','Victoria','Kitty','Leonie'],
		situation_verbs: [],
		verbs : [{text: 'hunted', prep: 'yes'},
		{text: 'disguised', prep: 'yes'}],
		locations : [{text: 'Almacks', prep: 'at'},{text: 'a palatial estate', prep: 'in'},{text: 'revolutionary France', prep: 'in'},{text: 'the vicarage', prep: 'in'},{text: 'her ancestral home', prep: 'in'},{text: 'an entailed estate', prep: 'on'},{text: 'a galleon', prep: 'on'},{text: 'a plantation', prep: 'on'},{text: 'the drawing room', prep: 'in'}],
		attributes_2: [],
		identities_2: ['curate','rake','libertine','captain','lord','count','revenue man','mill owner','Ajax'],
		names_2: [],
		surnames: []
	};

	Sparky.subgenres = [Sparky.general, Sparky.western, Sparky.adult, Sparky.paranormal, Sparky.professional,Sparky.thriller, Sparky.historical]
	
	Sparky.pick = function(e){
		//picks a word randomly from a list.
		return e[Math.floor(Math.random() * e.length)];
	};

	Sparky.collate = function(){
		//joins lists together from subgenres to create the master list.
		var attributes_1 = [];
		var identities_1 = [];
		var names_1 = [];
		var situation_verbs = [];
		var verbs = [];
		var locations = [];
		var attributes_2 = [];
		var identities_2 = [];
		var names_2 = [];
		var surnames = [];
		for (i=0;i<this.subgenres.length;i++){
			if (this.subgenres[i].chosen === "yes"){
				e = this.subgenres[i];
				attributes_1 = attributes_1.concat(e.attributes_1);
				identities_1 = identities_1.concat(e.identities_1);
				names_1 = names_1.concat(e.names_1);
				situation_verbs = situation_verbs.concat(e.situation_verbs);
				verbs = verbs.concat(e.verbs);
				locations = locations.concat(e.locations);
				attributes_2 = attributes_2.concat(e.attributes_2);
				identities_2 = identities_2.concat(e.identities_2);
				names_2 = names_2.concat(e.names_2);
				surnames = surnames.concat(e.surnames);
			} 
		}
		var collection = [attributes_1,identities_1,names_1,situation_verbs,verbs,locations,attributes_2,identities_2,names_2,surnames];
		return collection;
	};

	Sparky.generate = function(){
		//calls the function to generate the sentence, and puts it on the page.
		var sentence = this.create_sentence();
		$('#box').html(sentence);
	};

	Sparky.create_sentence = function(){
		//This creates a sentence from the various applicable lists.
		//The following lines select the words used for the eventual sentence.
		sets = this.collate();
		var attribute_1 = this.pick(sets[0]);

		var identity_1 = this.pick(sets[1]);

		var name_1 = this.pick(sets[2]);

		var situation_verb = this.pick(sets[3]);

		var verb = this.pick(sets[4]);

		var location = this.pick(sets[5]);

		var attribute_2 = this.pick(sets[6]);

		var identity_2 = this.pick(sets[7]);

		var name_2 = this.pick(sets[8]);

		var surname = this.pick(sets[9]);

		//The next three lines choose the preposition, if one is needed.
		var preposition = " " + location.prep + " ";
		if (!verb.prep){
		var preposition = " ";
		}

		//puts the whole sentence together.
		var sentence = attribute_1 +" "+ identity_1 +" "+ name_1 +" "+ situation_verb +" "+ verb.text + preposition + location.text + " with " + attribute_2 +" "+ identity_2 +" "+ name_2 +" "+ surname + ",";

		return sentence;
	};

	$('#generate').click(function(){
		//when the "generate" button is clicked, generate a new sentence
		Sparky.generate();
	});

	$('.about').click(function(){
		//display an "about" card with information about stuff.
		$('#overlay').toggle();
		$('#about_card').toggle();
	});

	//These functions include or exclude subgenres.
	$("#Western").change(function() {
		if(this.checked) {
			Sparky.western.chosen = 'yes';
		}
		else {
			Sparky.western.chosen = 'no';
		}
	});

	$("#Adult").change(function() {
		if(this.checked) {
			Sparky.adult.chosen = 'yes';
		}
		else {
			Sparky.adult.chosen = 'no';
		}
	});

	$("#Professional").change(function() {
		if(this.checked) {
			Sparky.professional.chosen = 'yes';
		}
		else {
			Sparky.professional.chosen = 'no';
		}
	});

	$("#Paranormal").change(function() {
		if(this.checked) {
			Sparky.paranormal.chosen = 'yes';
		}
		else {
			Sparky.paranormal.chosen = 'no';
		}
	});

	$("#Thriller").change(function() {
		if(this.checked) {
			Sparky.thriller.chosen = 'yes';
		}
		else {
			Sparky.thriller.chosen = 'no';
		}
	});
	
	$("#Historical").change(function() {
		if(this.checked) {
			Sparky.historical.chosen = 'yes';
		}
		else {
			Sparky.historical.chosen = 'no';
		}
	});

	//the next three lines just set up everything the first time the page loads. 
	//Things that should be hidden are hidden, and a sentence is created.
	$('#overlay').hide();
	$('#about_card').hide();
	Sparky.generate();
});
