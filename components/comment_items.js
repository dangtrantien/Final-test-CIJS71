import { auth } from "../constants/commons.js"

class CommentItems {
    constructor (msg) {
        this.$container = document.createElement('div');
        this.$container.setAttribute(
            'class',
            'p-4 flex '
        );

        this.$user_icon = `<img src="../photos/icons8-user-40.png" class="h-10 w-auto mr-2">`;

        this.$user = document.createElement('div');
        this.$user.setAttribute(
            'class',
            'flex flex-col'
        );

        this.$user_name_time = document.createElement('div');
        this.$user_name_time.setAttribute(
            'class',
            'text-sm text-gray-400 display_flex'
        );

        this.$user_name = document.createElement('div');
        this.$user_name.innerText = auth.currentUser.email;

        this.$user_message = document.createElement('p');
        this.$user_message.innerText = msg.content;
        this.$user_message.setAttribute('class', 'w-fit');

        this.$message_time = document.createElement('div');
        this.$message_time.innerText = `at ${new Date().toLocaleTimeString()}`;
        this.$message_time.setAttribute('class', 'ml-1');
    }
    
    render () {
        this.$container.appendChild(this.$user);
        this.$user.insertAdjacentHTML('beforeBegin',this.$user_icon);
        this.$user.appendChild(this.$user_name_time);
        this.$user_name_time.appendChild(this.$user_name);
        this.$user_name.insertAdjacentElement('afterend',this.$message_time);
        this.$user.appendChild(this.$user_message);

        return this.$container;
    }
}

export default CommentItems;