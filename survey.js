const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('What is your name? ', (name) => {
  rl.question('What is an activity you like doing?', (activity) => {
    rl.question('What do you listen to while doing that?', (sound) => {
      rl.question('Which meal is your favourite?', (meal) => {
        rl.question('What is your favourite thing to eat for that meal?', (food) => {
          rl.question('What is your favourite sport?', (sport) => {
            rl.question('What are you good at?', (talent) => {
              console.log(`${name} loves listening to ${sound} while ${activity}, devouring ${food} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${talent}.`);
              rl.close();
            });
           });
         });
       });
    });
  });
});

