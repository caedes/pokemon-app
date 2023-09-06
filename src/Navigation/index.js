export class Navigation {
  constructor(app) {
    this.app = app;
  }

  render() {
    const navigation = document.createElement("nav");
    const list = document.createElement("ol");
    navigation.append(list);

    fetch("https://api-pokemon-fr.vercel.app/api/v1/gen")
      .then((response) => response.json())
      .then((generations) =>
        generations.forEach(({ generation }, i) => {
          const listItem = document.createElement("li");
          if (
            generation === this.app.generation ||
            (this.app.generation === null && i === 0)
          ) {
            listItem.classList.add("current");
          }
          list.append(listItem);

          const link = document.createElement("a");
          link.setAttribute("href", "#");
          link.textContent = `Génération n°${generation}`;
          listItem.append(link);

          link.addEventListener("click", (event) => {
            event.preventDefault();

            this.app.setGeneration(generation);
          });
        })
      );

    this.app.container.append(navigation);
  }
}
