class Post {
// <<<<<<< HEAD
//     constructor(title, imageUrl) {
//             this.$postContainer = document.createElement("div");
//             this.$postContainer.classList.add("post");
//             this.$postContainer.setAttribute("class", "p-1.5 h-60 content-center")
        
//             this.$title = document.createElement("h2");
//             this.$title.innerText = title;
//             this.$title.setAttribute('class',"w-full h-1/4")
        
//             this.$postImage = document.createElement("img");
//             this.$postImage.src = imageUrl;
//             this.$postImage.setAttribute("class","w-full h-3/4");
//           }
//           render(container) {
//             this.$postContainer.appendChild(this.$title);
//             this.$postContainer.appendChild(this.$postImage);
//             container.appendChild(this.$postContainer)
//         }
// }   
// export default Post;
// =======
    constructor (title, image) {
        this.$postContainer = document.createElement("div");
        this.$postContainer.classList.add("post");

        this.$title = document.createElement("h2");
        this.$title.innerText = title;

        this.$postImage = document.createElement("img");
        this.$postImage.src = image;
    }

    render () {
        this.$postContainer.appendChild(this.$title);
        this.$postContainer.appendChild(this.$postImage);
        
        return this.$postContainer;
    }
}

export default Post;
