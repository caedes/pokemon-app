import { PokemonHttpClient } from "../PokemonHttpClient";
import { Type } from "../Type";
import "./styles.css";

export class PokemonSlug {
  constructor(app) {
    this.app = app;
  }

  render() {
    PokemonHttpClient.fetch(`/pokemon/${this.app.pokemon}`).then(
      ({ name, sprites, types }) => {
        const article = document.createElement("article");
        const title = document.createElement("h2");
        title.textContent = `${name.fr} #${this.app.pokemon}`;
        article.append(title);

        const image = document.createElement("img");
        image.setAttribute("src", sprites.regular);
        image.setAttribute("alt", name.fr);
        article.append(image);

        types.forEach(({ name, image }) => {
          new Type(name, image).render(article);
        });

        this.app.container.append(article);
      }
    );
  }
}
