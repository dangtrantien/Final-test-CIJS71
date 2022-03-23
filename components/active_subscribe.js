class ActiveSubs {
    constructor () {
        this.$container = document.createElement('div');
        this.$container.setAttribute(
            'class',
            'mt-4 flex justify-between items-center'
        );

        this.$subs_Btn = document.createElement('div');
        this.$subs_Btn.setAttribute(
            'class',
            'w-20 h7 flex items-center py-0.5 px-2 border border-solid border-black rounded cursor-pointer text-sm'
        );
        this.$subs_Btn.addEventListener('click', this.onSubs);

        this.$like_Btn = document.createElement('button');
        this.$like_Btn.innerText = 'Like';

        this.$active_subs = document.createElement('div');
        this.$active_subs.setAttribute(
            'class',
            'flex items-center'
        );

        this.$like = document.createElement('p');
        this.$like.setAttribute('class', 'mr-4');
        this.$like.innerText = 'liked'

        this.$comment = document.createElement('p');
        this.$comment.innerText = 'comments'
  
        this._like_icon = `<img src="../photos/icons8-heart-24.png" class="mr-1">`;

        this._comment_icon = `<img src="../photos/icons8-topic-24.png" class="mr-1">`;
    }

    setNumberSubs () {

    }

    onSubs = () => {

    }

    render () {
        this.$container.appendChild(this.$subs_Btn);
        this.$subs_Btn.appendChild(this.$like_Btn);
        this.$subs_Btn.insertAdjacentHTML('afterbegin',this._like_icon);

        this.$container.appendChild(this.$active_subs);
        this.$active_subs.appendChild(this.$like);
        this.$like.insertAdjacentHTML('beforebegin',this._like_icon);
        this.$active_subs.appendChild(this.$comment);
        this.$comment.insertAdjacentHTML('beforebegin',this._comment_icon);
        
        return this.$container;
    }
}

export default ActiveSubs;