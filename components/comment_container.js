import CommentInput from "./comment_input.js";
import Subs from "./subscribe.js";
import CommentList from "./comment_list.js";


class CommentContainer {
    constructor(activeComment) {
        this._setActiveComment = activeComment;
        
        this.$comment_container = document.createElement('div');
        this.$comment_container.setAttribute(
            'class',
            'mx-32 px-8 py-4 bg-white hidden'
        );

        this.$input_comment = new CommentInput(this._setActiveComment);

        this.$subscribe = new Subs();

        this.$comment_list = new CommentList(this._setActiveComment);
    }

    // setActiveComment(activeComment) {
    //     this.$input_comment.setActiveComment(activeComment);
    //     this.$comment_list.setActiveComment(activeComment);
    // }

    render(container) {
        this.$input_comment.render(this.$comment_container);
        this.$comment_container.appendChild(this.$subscribe.render());
        this.$comment_container.appendChild(this.$comment_list.render());

        container.appendChild(this.$comment_container);
    }
}

export default CommentContainer;