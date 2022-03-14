import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";
import { auth } from "../constants/commons.js";
import Input from "../components/input.js";
import Register from "./register.js";
import activeScreen from "../index.js";

class Login {
    constructor () {
        this.$container = document.createElement('form');
        this.$container.setAttribute(
            'class',
            'w-screen h-screen bg-no-repeat bg-center bg-auto'
        );
        this.$container.setAttribute('style','background-image: url(/photos/background-music-represents-sound-track-and-abstract-1540x760.jpg)')
        this.$container.addEventListener('submit', this.onSubmit);

        this.$title = document.createElement('h1');
        this.$title.innerText = 'Something here';
        this.$title.setAttribute(
            'class',
            'text-8xl text-white absolute top-20 left-1/4'
        );

        this.$user = document.createElement('div');
        this.$user.setAttribute(
            'class',
            'w-1/3 p-4 rounded-2xl border-solid border-2 absolute top-1/3 left-1/3'
        );

        this.$email = new Input(
            'Email',
            'text',
            'Your email address'
        );

        this.$password = new Input(
            'Password',
            'password',
            'Your Password'
        );

        this.$action = document.createElement('div');
        this.$action.setAttribute(
            'class',
            'mt-8 flex justify-between items-center'
        );

        this.$login_Btn = document.createElement('button');
        this.$login_Btn.type = 'submit';
        this.$login_Btn.innerText = 'Sign in';
        this.$login_Btn.setAttribute(
            'class',
            'w-24 p-2 rounded-full text-white bg-rose-500 hover:bg-red-500'
        );

        this.$go_to_page = document.createElement('div');
        this.$go_to_page.innerText = 'Need an account?'
        this.$go_to_page.setAttribute(
            'class',
            'text-red-500 italic cursor-pointer'
        );
        this.$go_to_page.addEventListener('click', this.gotoPage);
    }

    gotoPage = () => {
        const register = new Register();
        activeScreen.setActiveScreen(register);
    }

    onSubmit = async (event) => {
        event.preventDefault();

        try {
            const email = this.$email.getValue();
            const password = this.$password.getValue();

            if (email && password) {
                const response = await signInWithEmailAndPassword(auth,email,password);
                const user = response.user;
                if (user) {
                    alert ('Login successfull');
                }
            }
        }
        catch (error) {
            alert('Wrong Email or Password',error);
        }
    }

    render (container) {
        this.$container.appendChild(this.$title);
        this.$container.appendChild(this.$user);
        this.$user.appendChild(this.$email.render());
        this.$user.appendChild(this.$password.render());
        this.$user.appendChild(this.$action);
        this.$action.appendChild(this.$login_Btn);
        this.$action.appendChild(this.$go_to_page);

        container.appendChild(this.$container);
    }
}

export default Login;