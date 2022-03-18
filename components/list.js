import Post from './Post.js';
import { mock } from '../acet/mock.js';
class List {
    constructor () {
        this.$listContainer = document.createElement('div')
        this.$listContainer.setAttribute('class','abc grid grid-cols-4')

        this.$post = document.createElement('div')
        this.$post.setAttribute('id',"post")
        
        this.$postlist= new Post()
        
    }
    RenderPost() {
        mock.forEach(mock=>{
            
        })
    }
    
    render (container) {
        this.$postlist.render(this.$listContainer)
        this.$listContainer.appendChild(this.$post)
        container.appendChild(this.$listContainer)
    }
     
}
export default List;

