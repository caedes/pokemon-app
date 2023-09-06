export class Navigation {
  constructor(container) {
    this.container = container;
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
          if (i === 0) listItem.classList.add("current");
          list.append(listItem);

          const link = document.createElement("a");
          link.setAttribute("href", "#");
          link.textContent = `Génération n°${generation}`;
          listItem.append(link);
        })
      );

    this.container.append(navigation);
  }
}
