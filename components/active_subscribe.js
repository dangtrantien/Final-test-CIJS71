class ActiveSubs {
    constructor (count, icon) {
        this.$container = document.createElement('div');
        this.$container.setAttribute(
            'class',
            'mr-4 display_flex'
        );

        this.$count_subs = document.createElement('div');
        this.$count_subs.innerText = `${count}`;
        this.$count_subs.setAttribute('class', 'ml-2');

        this._icon = icon;
    }

    render (container) {
        this.$container.appendChild(this.$count_subs);
        this.$container.insertAdjacentHTML('afterbegin',this._icon);

        container.appendChild(this.$container);
    }
}

export default ActiveSubs;