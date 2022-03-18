import Banner from "../components/banner.js";
import List from "../components/list.js";
import Navbar from "../components/navBar.js";

class Main {
    constructor () {
        this.$maincontainer = document.createElement('div');    
        this.$maincontainer.setAttribute(
            'class',
            'w-screen h-screen bg-no-repeat bg-center bg-auto'
        );

        this.$nav = document.createElement('div');
        this.$nav.setAttribute('class','relative');

        this.$navBar = new Navbar();

        this.$banner = new Banner();

        this.$list = new List();
    }
    render (container) {
        this.$maincontainer.appendChild(this.$nav);
        this.$maincontainer.appendChild(this.$navBar.render());
        this.$maincontainer.appendChild(this.$banner.render());
        this.$maincontainer.appendChild(this.$list.render());

        container.appendChild(this.$maincontainer);
    }
}

export default Main;