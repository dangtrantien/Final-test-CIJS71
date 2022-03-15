import Navbar from "../components/navbar.js";


class Main {
    constructor () {
        this.$maincontainer = document.createElement('div');
       
        this.$navbar = new Navbar();
        
    }

    render (container) {
        this.$navbar.render(this.$maincontainer);
        container.appendChild(this.$maincontainer);
    }
}

export default Main;