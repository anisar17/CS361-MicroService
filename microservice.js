const fs = require('fs');

console.log('MicroService fetching data...');

fs.readFile('fruits.txt', 'utf-8', (err, content) => {
  if (err) {
    console.error(err);
    return;
  }

  const fruit = content.replace('Please enter a fruit name: ', ' ').trim();

  fetch(`https://www.fruityvice.com/api/fruit/${fruit}`)
    .then(response => response.json())
    .then(data => {
      const nutrition = data.nutritions;
      console.log(nutrition);
    })
    .catch(error => {
      console.error('Error fetching API.', error);
    });
});