import Post from './Post.js';
import { list_song } from '../acet/mock.js';
class List {
    constructor () {
        this.$Container = document.createElement('div')
        this.$Container.setAttribute('class', 'max-w-7xl mx-auto ')

        this.$category= document.createElement("h2")
        this.$category.innerText="US UK"
        this.$category.setAttribute("class", "mt-32")

        this.$listContainer = document.createElement('div');
        this.$listContainer.setAttribute('class',' grid grid-cols-6 ');
    }

    render () {
        this.$Container.appendChild(this.$category)
        this.$Container.appendChild(this.$listContainer)
        list_song.forEach((songs) => {
            const postList = new Post(songs.name,songs.image);
            this.$listContainer.appendChild(postList.render());
        })

        return this.$Container;
    }
}
export default List;