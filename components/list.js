import Post from './Post.js';
import { list_song } from '../acet/mock.js';
class List {
    constructor () {
// <<<<<<< HEAD
        this.$Container = document.createElement('div')
        this.$Container.setAttribute('class', 'max-w-7xl mx-auto ')

        // this.$post = document.createElement('div')
        // this.$post.setAttribute('id',"post")
        
        // list_song.map((songs) => {
        //     this.$postlist= new Post(songs.name,songs.image);
        //     this.$postlist.render(this.$listContainer)
        // })
        this.$category= document.createElement("h2")
        this.$category.innerText="US UK"
        this.$category.setAttribute("class", "mt-32")
        
        

        this.$listContainer = document.createElement('div');
        this.$listContainer.setAttribute('class',' grid grid-cols-6 ');

        this.$post = document.createElement('div');
        this.$post.setAttribute('id',"post");

    }
  
    
//     render (container) {
//         // this.$postlist.render(this.$listContainer)
//         this.$listContainer.appendChild(this.$post)
//         container.appendChild(this.$listContainer)
// =======
    render () {
        // this.$listContainer.appendChild(this.$post);
        this.$Container.appendChild(this.$category)

        list_song.forEach((songs) => {
            const postList = new Post(songs.name,songs.image);
            this.$listContainer.appendChild(postList.render());
        })
        this.$Container.appendChild(this.$listContainer)

        return this.$Container;
    }
     
}
export default List;

