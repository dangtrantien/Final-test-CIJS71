import Home from "../pages/Home.js";
// import Menu from "../../pages/Menu.js";
// import About from "../../pages/About.js";
// import Blog from "../../pages/Blog.js";
// import Contact from "../../pages/Contact.js";
import restaurent from "../index.js";

class HeaderStickyBar {
    constructor () {
        this.$container = document.createElement('div');
        this.$container.setAttribute(
            'class',
            'w-full h-20 flex fixed top-0 left-0 right-0 justify-between bg-red-50'
        );

        this.$pages = document.createElement('div');
        this.$pages.setAttribute(
            'class',
            'w-2/5 ml-8 flex justify-between items-center font-bold'
        );

        this._logo = `<img src="./photos/logo-main.png" alt="logo" class = "h-16 cursor-pointer">`;

        this.$home = document.createElement('div');
        this.$home.innerText = 'Home';
        this.$home.setAttribute(
            'class', 
            'hover:text-red-500 hover:underline hover:underline-offset-8 hover:decoration-4 cursor-pointer'
        );
        // this.$home.addEventListener('click', this.gotoHomePage());

        this.$menu = document.createElement('div');
        this.$menu.innerText = 'Menu';
        this.$menu.setAttribute(
            'class', 
            'hover:text-red-500 hover:underline hover:underline-offset-8 hover:decoration-4 cursor-pointer'
        );
        // this.$menu.addEventListener('click', this.gotoMenuPage());

        this.$about = document.createElement('div');
        this.$about.innerText = 'About';
        this.$about.setAttribute(
            'class', 
            'hover:text-red-500 hover:underline hover:underline-offset-8 hover:decoration-4 cursor-pointer'
        );
        // this.$about.addEventListener('click', this.gotoAboutPage());

        this.$blog = document.createElement('div');
        this.$blog.innerText = 'Blog';
        this.$blog.setAttribute(
            'class', 
            'hover:text-red-500 hover:underline hover:underline-offset-8 hover:decoration-4 cursor-pointer'
        );
        // this.$blog.addEventListener('click', this.gotoBlogPage());

        this.$contact = document.createElement('div');
        this.$contact.innerText = 'Contact';
        this.$contact.setAttribute(
            'class', 
            'hover:text-red-500 hover:underline hover:underline-offset-8 hover:decoration-4 cursor-pointer'
        );
        // this.$contact.addEventListener('click', this.gotoContactPage());

        this.$user = document.createElement('div');
        this.$user.setAttribute(
            'class',
            'w-1/4 mr-8 flex justify-between items-center'
        );

        this.$book_table = document.createElement('div');
        this.$book_table.innerText = 'Book a Table';
        this.$book_table.setAttribute(
            'class',
            'text-white hover:text-red-500 underline underline-offset-8 decoration-4 decoration-red-500 font-bold cursor-pointer'
        );

        this.$phone_Btn = document.createElement('button');
        this.$phone_Btn.innerText = '+10 (78) 783 3674';
        this.$phone_Btn.setAttribute(
            'class',
            'w-56 p-4 flex justify-evenly items-center text-white rounded-full button-bg-color hover:bg-orange-600'
        );

        this._phone =
        `
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 172 172" style=" fill:#000000;">
                <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                    <path d="M0,172v-172h172v172z" fill="none"></path>
                    <g fill="#ffffff">
                        <path d="M57.33333,17.18881c0.72787,0 0.72787,0 1.42774,0.72786c0.72786,0.72787 2.88347,2.85547 2.88347,4.3112c0,1.42773 0,5.01106 0.69987,7.86653c1.42774,3.58333 2.88347,12.9056 5.01107,17.91667c2.1556,5.01107 2.88346,7.89453 0.72786,10.75c-2.1556,3.58333 -15.76107,17.2168 -15.76107,17.2168c0,0 3.58333,7.16667 7.86654,11.44987c3.58333,5.01107 9.32226,12.17774 16.48893,17.91667c7.16667,6.4668 15.06119,12.17774 22.92774,15.76107c7.89453,-7.86654 14.33333,-14.33333 16.48893,-15.76107c2.1556,-1.42774 2.1556,-2.1556 5.73893,-0.69987c3.58333,1.42773 8.5944,3.58333 14.33333,4.2832c5.01107,0.72786 10.75,1.42774 14.33333,2.1556c3.58333,0.72787 3.58333,0.72787 4.3112,2.1556c1.42773,1.42774 2.1276,3.58333 2.1276,4.28321c0,0.72786 0,2.88346 0,10.05012c0,7.16667 0,17.18881 0,19.3444c0,2.1556 0,2.1556 -0.69988,3.58333c-0.72786,1.42774 -1.42773,5.01107 -1.42773,5.01107c0,0.72786 -3.58333,2.1556 -5.73894,2.1556c-2.1556,0 -10.05012,0 -15.06119,-0.72786c-5.01107,-0.69988 -18.61653,-3.58333 -23.6556,-5.71094c-5.01107,-1.45573 -21.5,-7.16667 -41.54427,-22.22787c-18.64453,-14.33333 -32.25,-33.67774 -40.14453,-49.4388c-7.89453,-15.78906 -12.17774,-32.97787 -12.9056,-41.57227c-1.42774,-8.5944 -1.42774,-12.17773 -1.42774,-14.33333c0.72787,-2.1556 2.85547,-4.31119 4.3112,-5.01106c1.42773,-0.72787 3.58333,-1.45573 5.71094,-1.45573c2.1556,0 7.89453,0 15.78906,0c7.86653,0 17.1888,0 17.1888,0z"></path>
                    </g>
                </g>
            </svg>
        `

    }

    // gotoHomePage = async () => {
    //     const homeScreen = new Home();
    //     restaurent.setActiveScreen(homeScreen);
    // }

    // gotoMenuPage = async () => {
    //     const menuScreen = new Menu();
    //     restaurent.setActiveScreen(menuScreen);
    // }

    // gotoAboutPage = async () => {
    //     const aboutScreen = new About();
    //     restaurent.setActiveScreen(aboutScreen);
    // }

    // gotoBlogPage = async () => {
    //     const blogScreen = new Blog();
    //     restaurent.setActiveScreen(blogScreen);
    // }

    // gotoContactPage = async () => {
    //     const contactScreen = new Contact();
    //     restaurent.setActiveScreen(contactScreen);
    // }

    render () {
        this.$container.appendChild(this.$pages);

        this.$pages.insertAdjacentHTML('afterbegin',this._logo);
        this.$pages.appendChild(this.$home);
        this.$pages.appendChild(this.$menu);
        this.$pages.appendChild(this.$about);
        this.$pages.appendChild(this.$blog);
        this.$pages.appendChild(this.$contact);

        this.$container.appendChild(this.$user);
        this.$user.appendChild(this.$book_table);
        this.$user.appendChild(this.$phone_Btn);
        this.$phone_Btn.insertAdjacentHTML('afterbegin', this._phone);

        return this.$container;
    }
}

export default HeaderStickyBar;