import Navbar from "../components/navbar.js";
import Banner from "../components/banner.js";
import List from "../components/list.js";

class Main {
    constructor () {
        this.$maincontainer = document.createElement('div');    
       this.$maincontainer.setAttribute( 'class',
       'w-screen h-screen bg-no-repeat bg-center bg-auto')
        this.$navbar = new Navbar();    
        this.$banner=new Banner();
        this.$list = new List();
        
    }
    render (container) {
        
        this.$navbar.render(this.$maincontainer);
        this.$banner.render(this.$maincontainer);
        this.$list.render(this.$maincontainer)
        container.appendChild(this.$maincontainer);
    }
}

export default Main;