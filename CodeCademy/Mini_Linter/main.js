let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

// Array the story
let storyWords = story.split(' ');

// betterWords only, unnecessaryWords excluded
let betterWords = storyWords.filter(word => {
  return !unnecessaryWords.includes(word);
});

// overusedWords counter
let wordCounter = 0;
storyWords.forEach((word) => {
  if(word === overusedWords[0]){
    wordCounter++;
  } else if(word === overusedWords[1]){
    wordCounter++;
  } else if(word === overusedWords[2]){
    wordCounter++;
  } 
} );

// Sentences counter
let sentences = 0;
storyWords.forEach(word => {
  if (word[word.length-1] === '.' || word[word.length-1] === '!') {
    sentences+=1;
  }
});

// console.logger
const logInfo = (param1, param2, param3) => {
    console.log('Word count: ' + param1);
    console.log('Sentences count: ' + param2);
    console.log('Overused word count: ' + param3);
}; 
logInfo(storyWords.length,sentences,wordCounter);

//betterWords logger
console.log(betterWords.join(' '));

