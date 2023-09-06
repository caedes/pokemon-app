import { Navigation } from "../Navigation";
import { PokemonList } from "../PokemonList";
import { PokemonSlug } from "../PokemonSlug";

export class App {
  constructor(container) {
    this.container = container;
  }

  render() {
    new Navigation(this.container).render();
    new PokemonList(this.container).render();
    new PokemonSlug(this.container).render();
  }
}
