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
const restaurent = new Restaurent(view);
const homeScreen = new Home();

restaurent.setActiveScreen(homeScreen);

export default restaurent;