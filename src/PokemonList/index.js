import { PokemonHttpClient } from "../PokemonHttpClient";

export class PokemonList {
  constructor(app) {
    this.app = app;
  }

  render() {
    const menu = document.createElement("menu");

    PokemonHttpClient.fetch(`/gen/${this.app.generation}`).then((pokemons) => {
      pokemons.forEach(({ name, pokedexId }) => {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.setAttribute("href", "#");
        link.textContent = `${name.fr} #${pokedexId}`;

        link.addEventListener("click", (event) => {
          event.preventDefault();

          this.app.setPokemon(pokedexId);
        });

        listItem.append(link);
        menu.append(listItem);
      });
    });

    this.app.container.append(menu);
  }
}
