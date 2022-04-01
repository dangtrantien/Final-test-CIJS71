import MusicPlayer from "./active_music_player.js";
import CommentContainer from "./comment_container.js";

class Post {
    constructor(song, setActiveMusic) {
        this._setActiveMusic = setActiveMusic;
        this._song = song;

        this.$postContainer = document.createElement("div");
        this.$postContainer.setAttribute("class", "cursor-pointer hover:scale-125 mb-20")
        this.$postContainer.addEventListener('click', this.setMusicPlayer)

        this.$title = document.createElement("h2");
        this.$title.innerText = song.name;
        this.$title.setAttribute("class", 'flex justify-center ')

        this.$postImage = document.createElement("img");
        this.$postImage.src = song.image;
        this.$postImage.setAttribute('class', 'w-full h-full');
    }

    setMusicPlayer = () => {
        const musicPlayer = new MusicPlayer(this._song);
        this._setActiveMusic(musicPlayer);

        const comment = new CommentContainer(this._song);
    }

    render() {
        this.$postContainer.appendChild(this.$postImage);
        this.$postContainer.appendChild(this.$title);

        return this.$postContainer;
    }
}

export default Post;