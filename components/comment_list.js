import { query, where, onSnapshot } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js";
import { messageRef } from "../constants/commons.js";
import CommentItems from "./comment_items.js";

class CommentList {
    constructor () {
        this.$container = document.createElement('div');
        this.onComment();
    }

    onComment = () => {
        onSnapshot(messageRef, (snapshot) => {
            const messages = [];

            snapshot.docChanges().forEach((change) => {
                if (change.type === 'added') {
                    messages.push(change.doc.data());
                } 
            });

            messages.sort((a,b) => b.createDate - a.createDate);
            messages.forEach((msg) => {
                const message_item = new CommentItems(msg);
                this.$container.insertAdjacentElement('afterbegin', message_item.render());
            });
        })
    }

    render () {
        return this.$container;
    }
}

export default CommentList;