const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? Nicknames are also acceptable :) ', (name) => {
  console.log(`${name}`);

  rl.question('What\'s an activity you like doing? ', (activity) => {
    console.log(`${activity}`);

    rl.question('What do you listen to while doing that? ', (music) => {
      console.log(`${music}`);

      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (meal) => {
        console.log(`${meal}`);

        rl.question('What\'s your favourite thing to eat for that meal? ', (food) => {
          console.log(`${food}`);

          rl.question('Which sport is your absolute favourite? ', (sport) => {
            console.log(`${sport}`);

            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (superpower) => {
              console.log(`${superpower}`);

              console.log(`${name} loves listening to ${music}. \nShe also likes ${activity} in her leisure time. She loves having ${food} for ${meal}. \nShe prefers ${sport} over any other sport, and is amazing at ${superpower}!`);

              console.log(`Thank you for your valuable feedback!`);
              rl.close();

            });
          });
        });
      });
    });
  });
});

          