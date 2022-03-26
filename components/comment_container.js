import { auth } from "../constants/commons.js";
import User from "./user.js";
import CommentList from "./comment_list.js";

class CommentContainer {
    constructor () {
        this.$comment_container = document.createElement('div');
        this.$comment_container.setAttribute(
            'class',
            'mx-32 divide-y-2 px-8 bg-white'
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