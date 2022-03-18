import Post from './Post.js';
import { mock } from '../acet/mock.js';
class List {
    constructor () {
        this.$listContainer = document.createElement('div');
        this.$listContainer.setAttribute('class','abc grid grid-cols-4');

        this.$post = document.createElement('div');
        this.$post.setAttribute('id',"post");
    }
    
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

