// import Menu from "../../pages/Menu.js"

class Headline {
    constructor (main_titile, sub_title) {
        this.$container = document.createElement('div');
        this.$container.setAttribute(
            'class',
            'header-bg'
        );

        this.$titile = document.createElement('div');
        this.$titile.setAttribute(
            'class',
            'w-2/5 absolute top-36 left-28'
        );

        this.$main_titile = document.createElement('h1');
        this.$main_titile.innerText = 'Meet, Eat & Enjoy the true test';
        this.$main_titile.setAttribute(
            'class',
            'text-6xl tracking-wide leading-tight'
        );

        this.$sub_titile = document.createElement('h2');
        this.$sub_titile.innerText = 'Making a reservation at Délicious restaurant is easy and takes just a couple of minutes.';
        this.$sub_titile.setAttribute(
            'class',
            'my-6 text-xl font-light tracking-tighter'
        );

        this.$action = document.createElement('div');
        this.$action.setAttribute(
            'class',
            'flex items-center'
        );
        
        this.$menu_Btn = document.createElement('button');
        this.$menu_Btn.innerText = 'Our Menu';
        this.$menu_Btn.setAttribute(
            'class',
            'w-48 h-16 p-4 rounded-full text-white button-bg-color hover:bg-orange-600'
        );
        // this.$menu_Btn.addEventListener('click', this.gotoMenuPage());
        
        this.$video = document.createElement('div');
        this.$video.innerText = 'Watch Video';
        this.$video.setAttribute(
            'class',
            'w-40 ml-6 flex items-center justify-around text-red-500 cursor-pointer text-lg font-light'
        );
        this.$container.addEventListener('click', this.playVideo());

        this._play_video_Btn = 
        `
            <svg xmlns="http://www.w3.org/2000/svg" width="27.772" height="31.843" viewBox="0 0 27.772 31.843">
                <path id="play-button" d="M37.317,11.091a1,1,0,1,0-1.057,1.7,3.7,3.7,0,0,1,0,6.271L19.874,29.274a3.7,3.7,0,0,1-5.65-3.136V5.7a3.7,3.7,0,0,1,5.65-3.136l9.539,5.948a1,1,0,1,0,1.057-1.7L20.931.874A5.693,5.693,0,0,0,12.226,5.7V26.138a5.622,5.622,0,0,0,2.931,4.978,5.623,5.623,0,0,0,5.775-.147L37.317,20.752a5.693,5.693,0,0,0,0-9.662Z" transform="translate(-12.226 0)" fill="#fe5f41"/>
            </svg>
        `

        this._video = 
        `
            <iframe width="1520" height="585" class="hidden" src="https://www.youtube.com/embed/Wxdj970RM7M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        `
    }
    
    // gotoMenuPage = async () => {
    //     const menuScreen = new Menu();
    //     restaurent.setActiveScreen(menuScreen);
    // }
    
    playVideo = () => {
        const popup = this._video;
        popup.classList.toogle('')

        if (popup.pause()) {
            popup.play();
        }
        else {
            popup.pause();
        }
    }

    render () {
        this.$container.appendChild(this.$titile);
        this.$titile.appendChild(this.$main_titile);
        this.$titile.appendChild(this.$sub_titile);
        this.$titile.appendChild(this.$action);
        this.$action.appendChild(this.$menu_Btn);
        this.$action.appendChild(this.$video);
        this.$video.insertAdjacentHTML('afterbegin',this._play_video_Btn);
        this.$video.insertAdjacentHTML('beforeend',this._video);

        return this.$container;
    }
}

export default Headline;