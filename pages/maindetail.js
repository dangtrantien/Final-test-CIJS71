import List from "../components/list.js";
import Navbar from "../components/navBar.js";
import CommentContainer from "../components/comment_container.js";
import Banner from "../components/banner.js";   
// import { html } from "../components/test.jsx";
class MainDetail {
    constructor () {
        this.$maincontainer = document.createElement('div');    
        this.$maincontainer.setAttribute(
            'class',
            'h-screen bg-no-repeat bg-center bg-auto bg-gray-100'
        );

        this.$nav = document.createElement('div');
        this.$nav.setAttribute('class','relative');
        this.$navBar = new Navbar();
        
        this.$banner = new Banner();
        // this.$list = new List();
        
        this.$comment = new CommentContainer();
    }

    setActiveConversation (conversation) {
        this.$maincontainer.setActiveConversation(conversation);
    }

    render (container) {
        this.$maincontainer.appendChild(this.$nav);
        this.$maincontainer.appendChild(this.$navBar.render());
        this.$maincontainer.appendChild(this.$banner.render());
        // this.$maincontainer.appendChild(this.$list.render());
        this.$maincontainer.appendChild(this.$comment.render());
        // this.$maincontainer.appendChild(parse.html.render())

        container.appendChild(this.$maincontainer);
    }
}

export default MainDetail;