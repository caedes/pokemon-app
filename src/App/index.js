import { Navigation } from "../Navigation";
import { PokemonList } from "../PokemonList";
import { PokemonSlug } from "../PokemonSlug";

export class App {
  constructor(container) {
    this.container = container;
    this.generation = 1;
    this.pokemon = 1;
  }

  render() {
    this.container.textContent = "";

    new Navigation(this).render();
    new PokemonList(this).render();
    new PokemonSlug(this).render();
  }

  setGeneration(nextGeneration) {
    this.generation = nextGeneration;
    this.render();
  }

  setPokemon(nextPokemon) {
    this.pokemon = nextPokemon;
    this.render();
  }
}
