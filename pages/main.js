import Banner from "../components/banner.js";
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
    this.$listcontainer.appendChild(
      new List((musicComponent, activeSong) =>
        this.setActiveMusic(musicComponent, activeSong)
      ).render()
    );

    this.$navBar = new Navbar();

    this.$banner = document.createElement("div");
    this.$banner.appendChild(
      new Banner((musicComponent, activeSong) =>
        this.setActiveMusic(musicComponent, activeSong)
      ).render()
    );

    this.$commentContainer = new CommentContainer();
  }

  setActiveMusic(musicComponent, activeSong) {
    this.$listcontainer.innerHTML = "";
    this.$banner.innerHTML = "";
    this.$commentContainer.$comment_container.classList.toggle("hidden");
    this.$commentContainer.$input_comment.setActiveComment(activeSong);
    this.$listcontainer.appendChild(musicComponent.render());
  }

  render(container) {
    this.$maincontainer.appendChild(this.$navBar.render());
    this.$maincontainer.appendChild(this.$banner);
    this.$maincontainer.appendChild(this.$listcontainer);
    this.$commentContainer.render(this.$maincontainer);

    container.appendChild(this.$maincontainer);
  }
}

export default Main;
