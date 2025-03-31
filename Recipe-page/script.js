document.getElementById('search-bar').addEventListener('click', getMealList);

function getMealList() {
    const ingredient = document.getElementById('search-input').value.trim();
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s= ${ingredient}`
   
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let mealList = document.getElementById('meal-list');
            mealList.innerHTML = '';
            let html="";
            console.log(data)
            if (data.meals) {
                data.meals.forEach(meal => {
                    let mealItem = `
                    
                        <div class="meal-item">
                            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                            <h3>${meal.strMeal}</h3>
                            <a href="https://www.themealdb.com/meal/${meal.idMeal}" target="_blank">view recipe</a>
                            <p>Meal ID: ${meal.idMeal}</p>
                        </div>
                    `;
                    mealList.innerHTML += mealItem;
                });
            } else {
                mealList.innerHTML = '<p>No meals found.</p>';
            }
        })
        .catch(error => console.error('Error:', error));
        document.getElementById('meal-list').innerHTML ="Error fatching data.Please try again later.";
}
