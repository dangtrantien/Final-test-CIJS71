import { query, where, onSnapshot } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js";
import { messageRef } from "../constants/commons.js";
import CommentItems from "./comment_items.js";

class CommentList {
    constructor() {
        this.$container = document.createElement('div');
    }

    onComment(activeComment) {
        // const q = query(messageRef, where('song_number', '==', activeComment));
console.log(activeComment);
        onSnapshot(messageRef, (snapshot) => {
            snapshot.docChanges().forEach((change) => {
                if (change.type === 'added') {
                    const messages = change.doc.data();
                    const message_item = new CommentItems(messages, activeComment);
                    // this.$container.insertAdjacentElement('afterbegin', message_item.render());
                    this.$container.appendChild(message_item.render());
                }
            });
        })
    }

    setActiveComment(activeComment) {
        this.onComment(activeComment);
    }

    render() {
        return this.$container;
    }
}

export default CommentList;