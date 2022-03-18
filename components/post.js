
class Post {
    constructor() {
            this.$postContainer = document.createElement("div");
            this.$postContainer.classList.add("post");
        
            this.$title = document.createElement("h2");
            this.$title.innerText = "Free React Course for 2022";
        
            this.$postImage = document.createElement("img");
            this.$postImage.src = "https://www.freecodecamp.org/news/content/images/size/w2000/2022/01/react2022.png";
          }
     
    
          render(container) {
            this.$postContainer.appendChild(this.$title);
            this.$postContainer.appendChild(this.$postImage);
            container.appendChild(this.$postContainer)
        }
}   
export default Post;
