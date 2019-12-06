//const btn = document.querySelector("#title");
const recipes = document.querySelector("section");
let listofRecipes = document.querySelectorAll("article");

function addRecipe(nazwa, opis, algorytm, skladniki, url){
    let listOfIngredients = skladniki.split(",");
    listOfIngredients = listOfIngredients.map(ing => ing.trim());
    let listOfActions = skladniki.split(",");
    listOfIActions = listOfActions.map(act => act.trim());

    let recipe = document.createElement("article");
    let showElement = document.createElement("div");
    let algorithm = document.createElement("div");
    let tmpUrl = "url(" + url + ")";
    showElement.style.backgroundImage = tmpUrl;
    let a = document.createElement("a");
    a.innerHTML = nazwa;
    let hr = document.createElement("hr");
    a.appendChild(hr);
    a.innerHTML += opis;
    let br = document.createElement("br");
    a.appendChild(br);
    let b = document.createElement("b");
    let i = document.createElement("i");
    i.innerHTML = "(przejdź do  przepisu)";
    b.appendChild(i);
    a.appendChild(b);
    showElement.appendChild(a);
    recipe.appendChild(showElement);

    algorithm.classList.add("algorithm");
    const palg = document.createElement("p");
    palg.innerHTML = algorytm;
    algorithm.appendChild(palg);
    const ulalg = document.createElement("ul")
    listOfActions.forEach((alg, index) => {
        const li = document.createElement("li");
        li.innerHTML = alg;
        if(index < 5) ulalg.appendChild(li);
    })
    algorithm.appendChild(ulalg);
    recipe.appendChild(algorithm);

    recipe.tl2 = new TimelineMax({ paused: true, reversed: true });
    recipe.tl2
      .fromTo(recipe.childNodes[0], 0.35, { y: 0 }, { y: "-100%" })
      .fromTo(recipe.childNodes[1], 0.35, { y: 0 }, { y: "-100%" }, "0.35");
  
    recipe.addEventListener("click", () => {
      listofRecipes.forEach(rec => {
        if (rec != recipe) rec.tl2.reversed() ? null : rec.tl2.reverse();
      });
      recipe.tl2.reversed() ? recipe.tl2.play() : recipe.tl2.reverse();
    });
    listofRecipes = [...listofRecipes, recipe];
    recipes.appendChild(recipe);
}


/* const listOfButtons = document.querySelectorAll(".btn-remove");
listOfButtons.forEach(btn =>
  btn.addEventListener("click", e => {
    e.stopPropagation();
    recipes.removeChild(btn.parentNode);
  })
); */

const submitBtn = document
    .querySelector("#sendForm")
    .addEventListener("click", e => {
      e.preventDefault();

      const nazwa = document.querySelector("#dishNameForm");

      const opis = document.querySelector("#description");

      const algorytm = document.querySelector("#recipeForm");

      const skladniki = document.querySelector("#ingredientsForm");

      const url = document.querySelector("#imgurlForm");

      addRecipe(nazwa.value, opis.value, algorytm.value, skladniki.value, url.value);

      nazwa.value = "";
      opis.value = "";
      skladniki.value = "";
      algorytm.value = "";
      url.value = "";
  });

  document.querySelector("#clearForm").addEventListener("click", () => {
    const algorytm = document.querySelector("#recipeForm");
    const skladniki = document.querySelector("#ingredientsForm");
    const url = document.querySelector("#imgurlForm");
    const opis = document.querySelector("#description");
    const nazwa = document.querySelector("#dishNameForm");
    algorytm.value = "";
    skladniki.value = "";
    url.value = "";
    opis.value = "";
    nazwa.value = "";
  });

  listofRecipes.forEach(recipe => {
    recipe.tl2 = new TimelineMax({ paused: true, reversed: true });
    recipe.tl2
      .fromTo(recipe.childNodes[1], 0.35, { y: 0 }, { y: "-100%" })
      .fromTo(recipe.childNodes[3], 0.35, { y: 0 }, { y: "-100%" }, "0.35");
    recipe.addEventListener("click", () => {
      console.log(recipe.childNodes);
      listofRecipes.forEach(rec => {
        if (rec != recipe) rec.tl2.reversed() ? null : rec.tl2.reverse();
      });
      recipe.tl2.reversed() ? recipe.tl2.play() : recipe.tl2.reverse();
    });
  });