import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";
import { auth } from "../constants/commons.js";
import Input from "../components/input.js";
import Login from "./login.js";
import activeScreen from "../index.js";

class Register {
    constructor () {
        this.$container = document.createElement('form');
        this.$container.setAttribute(
            'class',
            'w-screen h-screen bg-no-repeat bg-center bg-auto bg-cover'
        );
        this.$container.setAttribute('style','background-image: url(/photos/mohammad-metri-1oKxSKSOowE-unsplash.jpg)')
        this.$container.addEventListener('submit', this.onSubmit);

        this.$user = document.createElement('div');
        this.$user.setAttribute(
            'class',
            'bg-neutral-900 w-1/3 p-4 rounded-2xl border-solid border-2 absolute top-12 left-1/3'
        );

        this.$name = new Input(
            'Profile name',
            'text',
            'Your full name'
        );

        this.$email = new Input(
            'Email',
            'text',
            'Your email address',
            'Please provide a valid email address'
        );
        this.$email.$input.addEventListener('input', this.invalidEmail);

        this.$password = new Input(
            'Password',
            'password',
            'Your password',
            'Password must be at least 8 characters and include both numbers and letters'
        );
        this.$password.$input.addEventListener('input', this.invalidPassword);

        this.$confirm_password = new Input(
            'Confirm password',
            'password',
            'Confirm your password'
        );

        this.$action = document.createElement('div');
        this.$action.setAttribute(
            'class',
            'mt-8 flex justify-between items-center'
        );

        this.$register_Btn = document.createElement('button');
        this.$register_Btn.type = 'submit';
        this.$register_Btn.innerText = 'Register';
        this.$register_Btn.setAttribute(
            'class',
            'w-24 p-2 rounded-full text-white bg-rose-500 hover:bg-red-500'
        );

        this.$go_to_page = document.createElement('div');
        this.$go_to_page.innerText = 'Already have an account?'
        this.$go_to_page.setAttribute(
            'class',
            'text-red-500 italic cursor-pointer'
        );
        this.$go_to_page.addEventListener('click', this.gotoPage);
    }

    invalidEmail = () => {
        const email = this.$email.getValue();
        let valid_Email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        this.$email.warning(email,valid_Email);
    }

    invalidPassword = () => {
        const password = this.$password.getValue();
        let valid_Password = /^[A-Za-z](?=.*\d)\w{7,}$/;
        
        this.$password.warning(password,valid_Password);
    };

    gotoPage = () => {
        const login = new Login();
        activeScreen.setActiveScreen(login);
    }

    onSubmit = async (event) => {
        event.preventDefault();

        try {
            const email = this.$email.getValue();
            const password = this.$password.getValue();
            const confirm_Password = this.$confirm_password.getValue();
            
            const valid_Email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            const valid_Password = /^[A-Za-z](?=.*\d)\w{7,}$/;
            
            if (!email.match(valid_Email)) {
                alert ('Please provide a valid email');
            }

            else if (!password.match(valid_Password)) {
                alert ('Please provide a valid password');
            }

            else if (password === confirm_Password) {
                const response = await createUserWithEmailAndPassword(auth, email, password);
                const user = response.user;
                    if (user) {
                        const login = new Login();
                        activeScreen.setActiveScreen(login);
                    }
            }
            else {
                alert ("Password dose not match");
            }
        }
        catch (error) {
            alert ('Something wrong', error)
        }
    }

    render (container) {
        this.$container.appendChild(this.$user);
        this.$user.appendChild(this.$name.render());
        this.$user.appendChild(this.$email.render());
        this.$user.appendChild(this.$password.render());
        this.$user.appendChild(this.$confirm_password.render());
        this.$user.appendChild(this.$action);
        this.$action.appendChild(this.$register_Btn);
        this.$action.appendChild(this.$go_to_page);

        container.appendChild(this.$container);
    }
}

export default Register;