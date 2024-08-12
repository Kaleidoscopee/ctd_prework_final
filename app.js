fetch(`https://api.sampleapis.com/coffee/hot`)
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
    
  .catch(error => console.log("Error: " + error));

  