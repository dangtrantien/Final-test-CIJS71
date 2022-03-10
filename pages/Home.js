import restaurent from "../index.js";

class Home {
    constructor ( ) {
        this.$container = document.createElement('div');
        this.$container.innerText = 'top';
    }

    render () {

        return this.$container;
    }
}

export default Home;