class Post {
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