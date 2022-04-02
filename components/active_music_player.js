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
    }

    render() {
        this.$container.appendChild(this.$banner);
        this.$container.appendChild(this.$playlist);

        this.$banner.appendChild(this.$song_container);
        this.$song_container.appendChild(this.$playername);
        this.$song_container.appendChild(this.$tagbox);
        this.$tagbox.appendChild(this.$title);
        this.$tagbox.appendChild(this.$artist);

        return this.$container;
    }
}

export default MusicPlayer;