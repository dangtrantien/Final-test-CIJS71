import { auth } from "./constants/commons.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";
import Login from "./pages/login.js";
import Main from "./pages/main.js";
class Music {
    _activeScreen;

    constructor(view) {
        this.view = view;
        this.onAuthListener();
    }

    onAuthListener() {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const main = new Main();
                activeScreen.setActiveScreen(main);
            }
            else {
                const login = new Login();
                activeScreen.setActiveScreen(login);
            }
        });
    }

    setActiveScreen(screen) {
        if (this._activeScreen) {
            this.view.innerHTML = '';
        }
        this._activeScreen = screen;
        screen.render(this.view);
    }
}

const view = document.getElementById('root');
const activeScreen = new Music(view);

export default activeScreen;