import Home from "./pages/Home.js";

class Restaurent {
    _activeScreen;

    constructor(view) {
        this.view = view;
    }

    setActiveScreen (screen) {
        if(this._activeScreen) {
            this.view.innerHTML = '';
        }
        this._activeScreen = screen;
        screen.render(this.view);
    }
}

const view = document.getElementById('root');
const homeScreen = new Home();
const restaurent = new Restaurent(view);
view.appendChild(homeScreen.render());

export default restaurent;