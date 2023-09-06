export class PokemonSlug {
  constructor(container) {
    this.container = container;
  }

  render() {
    const article = document.createElement("article");
    const title = document.createElement("h2");
    title.textContent = "Bulbizarre";
    article.append(title);

    this.container.append(article);
  }
}
