import restaurent from "../index.js";
import HeaderStickyBar from "../components/header-sticky-bar.js";
import Headline from "../components/home-page/headline.js";
import Items from "../components/home-page/items.js";
import Menu from "../components/home-page/menu.js";
import BookTable from "../components/home-page/book-table.js";
import Footer from "../components/home-page/footer.js";

class Home {
    constructor ( ) {
        this.$container = document.createElement('div');
        this.$container.setAttribute('class', 'overflow-scroll')

        this.$header_sticky_bar = new HeaderStickyBar();
        
        this.$headline = new Headline();

        this.$items = new Items();

        this.$menu = new Menu();

        this.$book_table = new BookTable();

        this.$footer = new Footer();
    }

    render (container) {
        // this.$container.appendChild(this.$header_sticky_bar.render());
        this.$container.appendChild(this.$headline.render());
        this.$container.appendChild(this.$items.render());
        // this.$container.appendChild(this.$menu.render());
        // this.$container.appendChild(this.$book_table.render());
        // this.$container.appendChild(this.$footer.render());

        container.appendChild(this.$container);
    }
}

export default Home;