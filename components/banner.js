import Song from "./songs.js";

class Banner {
    constructor () {
        this.$bannerContainer = document.createElement('div');
        this.$bannerContainer.setAttribute(
          "class",
          " mt-20  max-w-7xl mx-auto  flex  "
        );
        this.$banner=document.createElement('div');
        this.$banner.setAttribute('class', 'w-3/5 h-[500px] ')


        this.$playlist= document.createElement('div');
        this.$playlist.setAttribute('class',"w-2/5  h-[500px]  mt-16 bg-cover m-5 ")

        
        this.$playlist.setAttribute('style',
        'background-image: url(http://images.genius.com/2216a21a5494b153cb4c24005370d031.700x700x1.jpg) ')
        
        this.$song = new Song()
    }
    render () {
        this.$banner.appendChild(this.$song.render())
        this.$bannerContainer.appendChild(this.$banner);
        this.$bannerContainer.appendChild(this.$playlist);

        return this.$bannerContainer;
    }
}

export default Banner;