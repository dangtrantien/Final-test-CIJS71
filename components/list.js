import Post from "./Post.js";
import { list_song } from "../acet/mock.js";
class List {
  constructor(category, setActiveMusic) {
    this._setActiveMusic = setActiveMusic;

    this.$Container = document.createElement("div");
    this.$Container.setAttribute("class", "px-32");

    this.$category = document.createElement("h2");
    this.$category.innerText = category;
    this.$category.setAttribute("class", "pt-24 mb-8 text-3xl font-semibold");

    this.$listContainer = document.createElement("div");
    this.$listContainer.setAttribute("class", " grid grid-cols-6 ");
  }

  render() {
    this.$Container.appendChild(this.$category);
    this.$Container.appendChild(this.$listContainer);
    list_song.forEach((songs) => {
      if (songs.category === this.$category.innerText) {
        const postList = new Post(songs, this._setActiveMusic);
        this.$listContainer.appendChild(postList.render());
      }
    });

    return this.$Container;
  }
}
export default List;
