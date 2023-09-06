export class PokemonList {
  constructor(app) {
    this.app = app;
  }

  render() {
    const menu = document.createElement("menu");

    const listItem = document.createElement("li");
    listItem.textContent = "Pokemon #1";
    menu.append(listItem);

    this.container.append(menu);
  }
}
