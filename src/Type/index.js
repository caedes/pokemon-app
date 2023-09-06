import "./styles.css";

export class Type {
  constructor(name, image) {
    this.name = name;
    this.image = image;
  }

  render(container) {
    const typeName = document.createElement("p");

    const typeImage = document.createElement("img");
    typeImage.setAttribute("src", this.image);
    typeImage.setAttribute("alt", this.name);
    typeImage.classList.add("type");
    typeName.append(typeImage);

    const typeNameTextNode = document.createTextNode(this.name);
    typeName.append(typeNameTextNode);

    container.append(typeName);
  }
}
