export default class BannerSong {
    constructor() {
        this.$container = document.createElement('div');
        this.$container.setAttribute('class', 'mt-16 w-full h-full relative  bg-[#6b6d83]');

        this.$playername = document.createElement('img')
        this.$playername.setAttribute('src', "http://images.genius.com/2216a21a5494b153cb4c24005370d031.700x700x1.jpg")
        this.$playername.setAttribute('class',
            'bg-cover bg-no-repeat h-[230px] w-[230px] absolute  left-[270px] -top-[50px] shadow-[0px_24px_54px_-12px_rgba(0,0,0,0.3)]'

        )

        this.$tagbox = document.createElement('div')
        this.$tagbox.setAttribute('class', 'absolute top-[240px] left-[100px]  text-xl text-white')

        this.$line = document.createElement('div')
        this.$line.setAttribute('class', "h-[3px] w-full bg-[#525363] absolute top-[360px] ")

        this.$title = document.createElement('p')
        this.$title.innerText = 'Leave Your Lover'

        this.$artist = document.createElement('p')
        this.$artist.innerText = 'Artist - Echos'

        this.$albums = document.createElement('p')
        this.$albums.innerText = 'Album - Echos'

        this.$paytime = document.createElement('div')
        this.$paytime.innerText = '1:44'
        this.$paytime.setAttribute(
            'class',
            'text-white  absolute top-[420px] left-[30px] text-lg   '
        )

        this.$button=document.createElement('div')
        this.$button.setAttribute('class','absolute top-[400px] left-[215px]')
        
        this.$buttonBacks=document.createElement('i')
        this.$buttonBacks.setAttribute('class',"fas fa-backward text-white text-5xl cursor-pointer")

        this.$butonPause=document.createElement('i')
        this.$butonPause.setAttribute('class',
        'fas fa-play-circle text-cyan-400 text-6xl ml-16  cursor-pointer pause'
        )
        this.$butonPause.addEventListener('click',this.playAudio)
            
        this.$audio=document.createElement('audio')
        this.$audio.setAttribute('src','https://v16-webapp.tiktok.com/0644ce87d48ae72ef72cf70f003fe412/62481598/video/tos/useast2a/tos-useast2a-pve-0037-aiso/8e749fde030e4167aa427bb81e4de21b/?a=1988&br=2572&bt=1286&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3LGnz7Th0VtzDXq&l=202204020321160102451361031F057673&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=11&rc=MzttNDo6ZmV1OzMzZjgzM0ApaWhkNWRpNzs3N2g7NThpZGdtLmwwcjRvYGpgLS1kL2Nzc2FhLTFjX2M2NTUxLi0yYDY6Yw%3D%3D&vl=&vr=')
        this.$audio.setAttribute('id','1')
       
        
        
        this.$buttonNext=document.createElement('i')
        this.$buttonNext.setAttribute(
            'class',
            'fas fa-forward text-white text-5xl ml-16 cursor-pointer'
        )

        this.$buttonSound=document.createElement('i')
        this.$buttonSound.setAttribute('class','fas fa-volume-up text-white text-5xl ml-10 cursor-pointer')
    }
    playAudio =(e) => {
        e.preventDefault();
          $(".fa-play-circle").toggleClass("fa fa-pause")   
         var a= document.getElementById('1') 
        return a.paused ? a.play() : a.pause();  
    }

    render() {
        this.$container.appendChild(this.$playername)
        this.$tagbox.appendChild(this.$title)
        this.$tagbox.appendChild(this.$artist)
        this.$tagbox.appendChild(this.$albums)
        this.$button.appendChild(this.$buttonBacks)
        this.$button.appendChild(this.$butonPause)
        this.$button.appendChild(this.$buttonNext)

        this.$button.appendChild(this.$buttonSound)

        this.$container.appendChild(this.$button)
        this.$container.appendChild(this.$tagbox)
        this.$container.appendChild(this.$line)
        this.$container.appendChild(this.$paytime)

        this.$container.appendChild(this.$audio)

        return this.$container
    }