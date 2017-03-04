var a = require('../dist/js/language');
var TestFramework = require('../vendor/tests/src/tester');

var MakeNCorpusTest = require('./MakeNCorpusTest');
var MaximumLikelihoodTest = require('./MaximumLikelihoodTest');
var StringTest = require('./StringTest');
var NGramTest = require('./NGramTest');
var WordCountTest = require('./WordCountTest');
var FindWordProbabilityTest = require('./FindWordProbabilityTest');

var string = "It was a linguistic inoculation. Against what? Against text as data. Against language as information. Against words as signifiers. She wrote a novel that boosted the readers resistance to babble. The airborne contagion of advertising and spin, political lying and celebrity froth, makes authentic discourse difficult. Makes reading the real thing difficult. How do we engage with meaning in a meaningless world? Eimear McBride’s first novel, A Girl Is a Half-Formed Thing, focused the reader on the words — disordered, rumpled, real. This was language that caught your eye and stared back at you. Reading it was an act of translation from a language known and not. We had to work with the writer to get the knack of it. It was a relief of concentration. Here was writing that reminded the brain why it has developed language centers. McBrides second novel tells a familiar love story. Young girl leaves small town for big city, meets older man, damaged, sexy, difficult. She redeems him and is redeemed by him. It could be schlocky romance; it could be daytime TV; it could be Jane Eyre; it could be Jane Birkin singing Serge Gainsbourgs Je Taime Moi Non Plus. Do you still need proof that the story line isnt what makes a story or a song or a movie bind to your deeper mind? The Lesser Bohemians, like A Girl Is a Half-Formed Thing, is all about the voice. If McBride’s story is a well-known formula, the form is all her own. What she doesnt do is put the words where they usually go — describing place and person, situation and encounter, building character and creating sympathy (or antagonism) in the reader. McBride isnt a naturalistic writer; if youve read Girl, you know that already. Her words don’t bother with the where — were in London, but the city is the city — or the who, what or when. It’s the mid-1990s, and Eily’s a drama student and Stephen’s an actor/writer, but they could be other people, living other lives. In Girl, there were no names; in The Lesser Bohemians, Stephen and Eily dont inhabit a world — they are the world. They spend most of their time shut in a small room having sex or talking. The reader is shut in with them. Its claustrophobic in the same way that being in your own head is claustrophobic. In our own heads, were always talking to ourselves. In our own heads, the words dont go neatly through the day and night as a commentary on life. There are no conclusions. We are disjointed, elliptical, a jotting pad. Our thoughts are more like graffiti than text: Silent in his room. Cigarette. Sit or shift? I halfly dress. Stay or leave? What do men expect? What would I like? To know exactly what he considers to be the right what now. We talk to make sense of the intensity and randomness of our minds. We talk to relieve the emptiness of our minds. In McBride’s fiction, that’s how it is. The interior process is outworked into language where the gaps are left as gaps: Gloom. Him. Thin and long cat limbs stretched wrong-way on the bed. Limp in the aftermath. Head to the side. Wash between my legs. The anger though. One of McBrides strengths as a writer is that she doesnt fill in just for the sake of it. The Twitter-style brevity of her sentences — with none of the Twitter-style banality — ensures that its the reader whos filling in the gaps, not of story or intent but of language. The readers mind runs alongside hers, and our sentences can, if we want them to, run past hers. In that sense, she really isnt a control freak, unlike James Joyce, whose prose is a be-saved or be-damned baptism by total immersion. McBride isn’t an old-fashioned despot writer. The take-it-or-leave-it arrogance is absent. The confidence and the capacity are as good as anyones, male or female, but (and Im not going to attribute it to gender, though its something that might be discussed sometime) theres an openness, an inclusivity, a distinct lack of God-almightyness, that makes reading her such a pleasure. And the time has come round again for some experiment. Modernism took a battering in Anglo-American fiction and criticism from the 1950s right through to the switch of the century. There were exceptions, of course, but not a lot of encouragement for fiction writers working against traditional forms or using non-naturalistic ways of telling stories. Poetry and theater fared far better. In the 1980s, Kathy Acker achieved cult status and plenty of ridicule when she broke up language and wrote obsessively about female sexuality. Kathy Goes to Haiti is godmother prose to McBride. Of McBrides noted lack of commas, recall that Gertrude Stein banished them because she thought they were servile. (See Stein’s essay Poetry and Grammar, which, Stein being Stein, is all about prose.) McBride has completed the grammatical hijack and not been laughed at. It has taken time — culturally, critically — and particularly for women, to put language back in the atom smasher, to play with form, to dodge the weight of storytelling and be taken seriously. Things are changing. Ali Smith has sailed forward without too much headwind, and she too is a writer who is creating an appetite for risk, play, nonlinear narrative and love of language. Such shifts in taste and appetite make it possible for Eimear McBride to be read joyfully and not judgmentally. Theres endless sex in this novel. If the writing were terrible, wed be in Fifty Shades territory. But McBride is good at describing heterosexual sex because she doesnt describe it in the usual ways: His body — it seems — liking everything while mine still doesnt know whats going on but tries so hard to please. Catch it watching him follow the pleasure though, then — where he expects — starts finding its own. Thats it, he says and farther goes than I would think to give. Straight to manhandled knickers and every inch he can. The run-ons of speech characteristic of her style can be overused. Not breaking up the conversational dialogue leaves the reader with pages of dense text and no coming up for air. Girl deployed short chapters with plenty of space around the text, space that supported the terse sentence structure. Here that taut beauty can get lost in the nonstopness of the monologue that is the dialogue. Stephens own voice suffers in this style. He isnt Irish, but his speech patterns and mannerisms are. Stephen has his own long first-person narrative sewn in, a story thats harrowing and fearful. But his voice, as we hear it, is Eilys. Maybe thats because only Eily really exists. But what does it matter? The Lesser Bohemians is in style and voice a continuation of A Girl Is a Half-Formed Thing. It was begun before Girl was published and together they make a soundscape. Reading them back to back is an encounter with a writer for whom language is an end not a means, a beginning not an end.";

var options = {

	// stringTest: {
	// 	fn: a.cleanText,
	// 	test: StringTest,
	// 	args: [string]
	// },
	// 
	wordProbability: {
		fn: a.findWordProbability,
		test: FindWordProbabilityTest,
		args: [a.cleanText(string), "a"]
	},
	maximumLikelihood: {
		fn: a.maximumLikelihood,
		test: MaximumLikelihoodTest,
		args: [a.cleanText(string), "against", "text"]
	},
	
	// nCorpus: {
	// 	fn: a.makeNCorpus,
	// 	test: MakeNCorpusTest,
	// 	args: [a.makeCorpus(a.cleanText(string)), 3]
	// },
	
	// wordCount: {
	// 	fn: a.wordCount,
	// 	test: WordCountTest,
	// 	args: [a.makeCorpus(string)]
	// },

	// nGram: {
	// 	fn: a.nGram,
	// 	test: NGramTest,
	// 	args: []
	// }

};

var testFramework = new TestFramework(options);

// var count = a.wordCount(a.makeCorpus(a.cleanText(string)));
// console.log(count);