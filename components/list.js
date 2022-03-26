import Post from './Post.js';
import { mock } from '../acet/mock.js';
class List {
    constructor () {
// <<<<<<< HEAD
        this.$listContainer = document.createElement('div')
        this.$listContainer.setAttribute('class', 'max-w-7xl mx-auto px-2 sm:px-6 lg:px-8  abc grid grid-cols-4')

        this.$post = document.createElement('div')
        this.$post.setAttribute('id',"post")
        
        mock.map((post) => {
            this.$postlist= new Post(post.title,post.image);
            this.$postlist.render(this.$listContainer)
        })
       
        

        this.$listContainer = document.createElement('div');
        this.$listContainer.setAttribute('class','abc grid grid-cols-4');

        this.$post = document.createElement('div');
        this.$post.setAttribute('id',"post");

    }
  
    
//     render (container) {
//         // this.$postlist.render(this.$listContainer)
//         this.$listContainer.appendChild(this.$post)
//         container.appendChild(this.$listContainer)
// =======
    render () {
        this.$listContainer.appendChild(this.$post);
        mock.forEach((post) => {
            const postList = new Post(post.title,post.image);
            this.$listContainer.appendChild(postList.render());
        })

        return this.$listContainer;
    }
     
}
export default List;

