document.addEventListener('DOMContentLoaded', () => {
  const pickButton = document.getElementById('pick_button');

  pickButton.addEventListener('click', () => {
    fetch(`https://api.sampleapis.com/coffee/hot`)
    .then(res => res.json())
    .then(data => {
     const randomIndex = Math.floor(Math.random() * data.length);
     const randomDrinkData = data[randomIndex];
    
      const randomDrink = document.getElementById('randomDrink');
      randomDrink.innerHTML = '';
    
          const drinkName = document.createElement('div');
          drinkName.textContent = randomDrinkData.title;
          randomDrink.appendChild(drinkName);
        
      })
    
    .catch(error => console.log("Error: " + error));


  });
})



 /* fetch(`https://api.sampleapis.com/coffee/iced`)
  .then(res => res.json())
  .then(data => {
    const randomDrink = document.getElementById('randomDrink');
    randomDrink.innerHTML = '';
    data.toGet(drink => {
        const drinkName = document.createElement('div');
        drinkName.textContent = drink.title;
        randomDrink.appendChild(drinkName);
        });
    })
    
  .catch(error => console.log("Error: " + error));*/

  