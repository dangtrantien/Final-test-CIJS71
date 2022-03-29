class Post {
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