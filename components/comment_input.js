import { auth, messageRef } from "../constants/commons.js";
import { addDoc } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js";

class CommentInput {
    _setActiveComment;

    constructor(activeComment) {
        this._setActiveComment = activeComment;
        console.log(this._setActiveComment);
        this.$container = document.createElement('form');
        this.$container.addEventListener('submit', this.onSubmit);

        this.$user = document.createElement('div');
        this.$user.setAttribute('class', 'display_flex bg-gray-200');

        this.$input_comment = document.createElement('input');
        this.$input_comment.placeholder = 'Write a comment'
        this.$input_comment.setAttribute(
            'class',
            'w-full h-fit px-3 mx-2 rounded text-lg focus:outline-slate-400'
        );

        this.$userIcon = `<img src="../photos/icons8-user-40.png">`;
    }

    onSubmit = async (e) => {
        try {
            e.preventDefault();

            const comment = this.$input_comment.value;
            const new_comment = {
                content: comment,
                createDate: new Date().valueOf(),
                sender_id: auth.currentUser.uid,
                song_number: await this._setActiveComment
            };
            console.log(new_comment);
            addDoc(messageRef, new_comment);
            this.$input_comment.value = '';
        }
        catch (err) {
            alert(err.message)
        }
    }

    setActiveComment(activeComment) {
        this._setActiveComment = activeComment;
    }

    render(container) {
        this.$container.appendChild(this.$user);
        this.$user.appendChild(this.$input_comment);
        this.$user.insertAdjacentHTML('afterbegin', this.$userIcon);

        container.appendChild(this.$container);
    }
}

export default CommentInput;