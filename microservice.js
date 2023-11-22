const fs = require('fs').promises;

console.log('Running microservice...');

async function readFile() {
    try {
        const fileResult = await fs.readFile('fruits.txt');
        const data = fileResult.toString();

        if (data.startsWith('Please enter a fruit name: ')) {
          const fruit = data.replace('Please enter a fruit name: ', '').trim();
          await getFruitNutrition(fruit);
          process.exit(0);
        }
    } catch (error) {
        console.error('Cannot read file', error);
    }
}

async function getFruitNutrition(fruit) {
    try {
        const response = await fetch(`https://www.fruityvice.com/api/fruit/${fruit}`);
        const info = await response.json();

        const nutrition = info.nutritions;
        console.log(nutrition);

        const formattedData = `Nutrition for ${info.name}:\n` +
            `Calories: ${nutrition.calories} cal\n` +
            `Fat: ${nutrition.fat} g\n` +
            `Sugar: ${nutrition.sugar} g\n` +
            `Carbohydrates: ${nutrition.carbohydrates} g\n` +
            `Protein: ${nutrition.protein} g`;

        await fs.writeFile('fruits.txt', formattedData, 'utf-8');
        console.log('Nutrition data written to fruits.txt');
    } catch (error) {
        console.error('Error fetching API', error);
    }
}

setTimeout(readFile, 2000);
