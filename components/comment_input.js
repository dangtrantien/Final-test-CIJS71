import { auth, messageRef } from "../constants/commons.js";
import { addDoc } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js";

class CommentInput {
    constructor () {
        this.$container = document.createElement('form');
        this.$container.addEventListener('submit', this.onSubmit);

        this.$user = document.createElement('div');
        this.$user.setAttribute('class','display_flex bg-gray-200');

        this.$input_comment = document.createElement('input');
        this.$input_comment.placeholder = 'Write a comment'
        this.$input_comment.setAttribute(
            'class',
            'w-full h-fit px-3 mx-2 rounded text-lg focus:outline-slate-400'
        );

        this.$userIcon = `<img src="../photos/icons8-user-40.png">`;
    }

    onSubmit = (e) => {
        e.preventDefault();

        const comment = this.$input_comment.value;

        const new_comment = {
            content: comment,
            createDate: new Date().valueOf(),
            sender_id: auth.currentUser.uid,
            music_id: '',
        };

        addDoc(messageRef, new_comment);
        this.$input_comment.value = '';
    }

    render () {
        this.$container.appendChild(this.$user);
        this.$user.appendChild(this.$input_comment);
        this.$user.insertAdjacentHTML('afterbegin',this.$userIcon);
        
        return this.$container;
    }
}

export default CommentInput;