import { auth } from "../constants/commons.js";
import User from "./user.js";
import CommentList from "./comment_list.js";

class CommentContainer {
    constructor () {
        this.$comment_container = document.createElement('div');
        this.$comment_container.setAttribute(
            'class',
            'max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 bg-white mt-20 '
        );

        this.$user = new User();

        this.$comment_list = new CommentList();
    }

    render () {
        this.$comment_container.appendChild(this.$user.render());
        this.$comment_container.appendChild(this.$comment_list.render());

        return this.$comment_container;
    }
}

export default CommentContainer;