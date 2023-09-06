import "./styles.css";

export class PokemonSlug {
  constructor(app) {
    this.app = app;
  }

  render() {
    const article = document.createElement("article");
    const title = document.createElement("h2");
    title.textContent = `Bulbizarre #${this.app.pokemon}`;
    article.append(title);

    this.app.container.append(article);
  }
}
