import { signOut } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-auth.js";
import { auth } from "../constants/commons.js"
 
class NavBar  {
    constructor(){
        this.$navcontainer = document.createElement('nav');
        this.$navcontainer.setAttribute(
            "class",
            "bg-gray-800 h-17 w-screen px-8 display_flex fixed top-0 left-0 right-0"
        );

        this.$logo = document.createElement('div');
        this.$logo.setAttribute('class', "display_flex");

        this.$img = document.createElement('img');
        this.$img.setAttribute("class",
            "block h-20 w-auto bg-cover",
        );
        this.$img.setAttribute("src", "https://iconape.com/wp-content/files/el/292808/svg/sound-seeklogo.com.svg");

        this.$SoundMay = document.createElement('a');
        this.$SoundMay.setAttribute(
            'class',
            'ml-4 italic text-xl text-white font-medium cursor-pointer'
        );
        this.$SoundMay.innerText = 'SoundMay';

        this.$UserBox = document.createElement('div');
        this.$UserBox.setAttribute('class','display_flex');
        
        this.$buttonSignOut=document.createElement('button');
        this.$buttonSignOut.setAttribute(
            'class',
            'bg-gray-800 bg-yellow-500 hover:bg-blue-400 text-white font-bold py-2 px-4 hover:border-blue-500 rounded'
        );
        this.$buttonSignOut.innerText='Sign Out';
        this.$buttonSignOut.addEventListener('click', this.signOut);
        
        this.$User= document.createElement('div');
        this.$User.setAttribute(
            'class',
            'mr-4 hover:text-blue-400 text-yellow-500 font-bold cursor-pointer'
        );
        this.$User.innerText= auth.currentUser.email;
    }

    signOut = () => {
        signOut (auth).then((response) => {
            if (response) {
                alert ('You have been signed out');
            }
        })
        .catch ((error) => {
            alert ('Something wrong', error);
        })
    }
    
    render(){
        this.$navcontainer.appendChild(this.$logo);
        this.$logo.appendChild(this.$img);
        this.$logo.appendChild(this.$SoundMay);

        this.$navcontainer.appendChild(this.$UserBox);
        this.$UserBox.appendChild(this.$User);
        this.$UserBox.appendChild(this.$buttonSignOut);
         
        return this.$navcontainer;
    }
}

export default NavBar;