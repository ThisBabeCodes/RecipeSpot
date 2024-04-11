console.log("Testing...")
const recipeCardsDiv = document.querySelector(".recipe-cards");
const recipeData = sessionStorage.getItem("recipeResults");

// Checking whether stored data exists.
if (recipeData) {
  // Parsing the JSON data.
  const data = JSON.parse(recipeData);

  // Clearing the current recipes cards.
  recipeCardsDiv.innerHTML = "";

  if (data.meals && data.meals.length > 0) {
    console.log(data);
    data.meals.forEach(createRecipeCard);
  } 
  else {
    const message = document.createElement("p");
    message.classList.add("no-recipes");
    message.innerHTML = `There are currently no '${sessionStorage.getItem("query")}' recipes.`;

    recipeCardsDiv.appendChild(message);
  }
} else {
  console.error("No data found in session storage.");
  window.location.href = "index.html";

}


function createRecipeCard(value, index, array) {
  // Creating the recipe card div.
  const recipeCardDiv = document.createElement("div");
  recipeCardDiv.classList.add("recipe-card");

  // Creating the image part.
  const imgDiv = document.createElement("div");
  imgDiv.classList.add("recipe-img");

  const imgUrl = value.strMealThumb;
  const img = document.createElement("img");
  img.setAttribute("src", imgUrl);

  imgDiv.appendChild(img);
  recipeCardDiv.appendChild(imgDiv);

  // Creating the labels part.
  const labelsDiv = document.createElement("div");
  labelsDiv.classList.add("recipe-labels");

  const title = value.strMeal;
  const titleP = document.createElement("p");
  titleP.classList.add("recipe-title");
  titleP.innerHTML = `${title}`;

  labelsDiv.appendChild(titleP);

  const category = value.strCategory;
  const categoryP = document.createElement("p");
  categoryP.classList.add("recipe-category");
  categoryP.innerHTML = `<span>Category:</span> ${category}`;

  labelsDiv.appendChild(categoryP);

  recipeCardDiv.appendChild(labelsDiv);

  recipeCardsDiv.appendChild(recipeCardDiv)
}

