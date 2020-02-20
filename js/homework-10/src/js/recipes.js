import recipesJSON from '../recipes.json';
import menuRecipes from '../template/recipes.hbs';

const refs = {
  menyUl: document.querySelector('.js-menu'),
};

const markup = menuRecipes(recipesJSON);
refs.menyUl.insertAdjacentHTML('beforeend', markup);

