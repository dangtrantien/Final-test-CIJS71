import List from "../components/list.js";
import Navbar from "../components/navBar.js";
import CommentContainer from "../components/comment_container.js";

class Main {
  constructor() {
    this.$maincontainer = document.createElement("div");
    this.$maincontainer.setAttribute(
      "class",
      "bg-no-repeat bg-center bg-auto bg-gray-100"
    );

    this.$listcontainer = document.createElement("div");

    this.$list_Viet = new List(
      'Nhạc Việt',
      (musicComponent, activeSong) => this.setActiveMusic(musicComponent, activeSong)
    );

    this.$list_US_UK = new List(
      'Nhạc Âu Mỹ',
      (musicComponent, activeSong) => this.setActiveMusic(musicComponent, activeSong)
    );

    this.$navBar = new Navbar();

    this.$commentContainer = new CommentContainer();
  }

  setActiveMusic(musicComponent, activeSong) {
    this.$listcontainer.innerHTML = "";
    this.$commentContainer.$comment_container.classList.toggle("hidden");
    this.$commentContainer.setActiveComment(activeSong);
    this.$listcontainer.appendChild(musicComponent.render());
  }

  render(container) {
    this.$maincontainer.appendChild(this.$navBar.render());
    this.$maincontainer.appendChild(this.$listcontainer);
    this.$listcontainer.appendChild(this.$list_US_UK.render());
    this.$listcontainer.appendChild(this.$list_Viet.render());
    this.$commentContainer.render(this.$maincontainer);

    container.appendChild(this.$maincontainer);
  }
}

export default Main;
