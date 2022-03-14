class Main {
    constructor () {
        this.$container = document.createElement('div');
        this.$container.innerText = 'MUSIC';
    }

    render (container) {

        container.appendChild(this.$container);
    }
}

export default Main;