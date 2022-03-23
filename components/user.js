import CommentInput from "./comment_input.js";
import Subs from "./subscribe.js";

class User {
    constructor () {
        this.$container = document.createElement('div');
        this.$container.setAttribute(
            'class',
            'py-4 h-auto'
        );
        
        this.$input_list = new CommentInput();

        this.$subscribe = new Subs();
    }

    render () {
        this.$container.appendChild(this.$input_list.render());
        this.$container.appendChild(this.$subscribe.render());

        return this.$container;
    }
}

export default User;