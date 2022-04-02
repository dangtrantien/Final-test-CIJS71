class MusicPlayer {
    constructor(song) {
        this.$container = document.createElement('div');
        this.$container.setAttribute(
            "class",
            " mt-20  max-w-7xl mx-auto  flex  "
        );
        this.$banner = document.createElement('div');
        this.$banner.setAttribute('class', 'w-3/5 h-[500px] ');


        this.$playlist = document.createElement('div');
        this.$playlist.setAttribute('class', "w-2/5  h-[500px]  mt-16 bg-contain bg-no-repeat bg-center m-5 ");


        this.$playlist.setAttribute('style',
            `background-image:  url(${song.image})`);

        this.$song_container = document.createElement('div');
        this.$song_container.setAttribute('class', 'mt-16 w-full h-full relative  bg-[#6b6d83]');

        this.$playername = document.createElement('img');
        this.$playername.setAttribute('src', `${song.image}`);
        this.$playername.setAttribute('class',
            'bg-cover bg-no-repeat h-[230px] w-[230px] absolute  left-[270px] -top-[50px] shadow-[0px_24px_54px_-12px_rgba(0,0,0,0.3)]'

        );

        this.$tagbox = document.createElement('div');
        this.$tagbox.setAttribute('class', 'absolute top-[240px] left-[100px]  text-xl text-white');

        this.$title = document.createElement('p');
        this.$title.innerText = `${song.name}`;

        this.$artist = document.createElement('p');
        this.$artist.innerText = `Artist - ${song.singer}`;

        this.$line = document.createElement('div')
        this.$line.setAttribute('class', "h-[3px] w-full bg-[#525363] absolute top-[360px] ")

        this.$button = document.createElement('div')
        this.$button.setAttribute('class', 'absolute top-[400px] left-[215px]')

        this.$buttonBacks = document.createElement('i')
        this.$buttonBacks.setAttribute('class', "fas fa-backward text-white text-5xl cursor-pointer")

        this.$butonPause = document.createElement('i')
        this.$butonPause.setAttribute('class',
            'fas fa-play-circle text-cyan-400 text-6xl ml-16  cursor-pointer pause'
        )
        this.$butonPause.addEventListener('click', this.playAudio)

        this.$audio = document.createElement('audio')
        this.$audio.setAttribute('src', '../photos/audio1.mp3')
        this.$audio.setAttribute('id', '1');

        this.$buttonNext = document.createElement('i')
        this.$buttonNext.setAttribute(
            'class',
            'fas fa-forward text-white text-5xl ml-16 cursor-pointer'
        )

        this.$buttonSound = document.createElement('i')
        this.$buttonSound.setAttribute('class', 'fas fa-volume-up text-white text-5xl ml-10 cursor-pointer')
    }

    playAudio = (e) => {
        e.preventDefault();
        $(".fa-play-circle").toggleClass("fa fa-pause")
        var a = document.getElementById('1')
        console.log(a);
        return a.paused ? a.play() : a.pause();
    }

    render() {
        this.$container.appendChild(this.$banner);
        this.$container.appendChild(this.$playlist);

        this.$banner.appendChild(this.$song_container);
        this.$song_container.appendChild(this.$playername);
        this.$song_container.appendChild(this.$tagbox);
        this.$tagbox.appendChild(this.$title);
        this.$tagbox.appendChild(this.$artist);

        this.$song_container.appendChild(this.$line);

        this.$song_container.appendChild(this.$button);
        this.$button.appendChild(this.$buttonBacks);
        this.$button.appendChild(this.$butonPause);
        this.$button.appendChild(this.$buttonNext);
        this.$button.appendChild(this.$buttonSound);
        
        this.$song_container.appendChild(this.$audio);

        return this.$container;
    }
}

export default MusicPlayer;