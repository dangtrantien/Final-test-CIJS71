import CommentItems from "./comment_items.js";

class CommentList {
    constructor () {
        this.$container = document.createElement('div');

        this.$comment_items = new CommentItems();
    }

    render () {
        this.$container.appendChild(this.$comment_items.render());

        return this.$container;
    }
}

export default CommentList;