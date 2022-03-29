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
    constructor (name, image) {

        this.$postContainer = document.createElement("div");
        this.$postContainer.setAttribute("class","cursor-pointer hover:scale-125 mb-20")

  

        this.$title = document.createElement("h2");
        this.$title.innerText = name;
        this.$title.setAttribute("class",'flex justify-center ')

        this.$postImage = document.createElement("img");
        this.$postImage.src = image;
        this.$postImage.setAttribute('class','w-full h-full');
    }

    render () {
        this.$postContainer.appendChild(this.$postImage);
        this.$postContainer.appendChild(this.$title); 
        
        return this.$postContainer;
    }
}

export default Post;
