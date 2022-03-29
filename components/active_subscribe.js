class ActiveSubs {
    constructor (icon, count) {
        this.$container = document.createElement('div');
        this.$container.setAttribute(
            'class',
            'mr-4 text-zinc-400 flex items-center'
        );

        this.$count_subs = document.createElement('div');
        this.$count_subs.innerText = count;
        this.$count_subs.setAttribute('class', 'ml-2');

        this._icon = icon;
    }

    render () {
        this.$container.appendChild(this.$count_subs);
        this.$container.insertAdjacentHTML('afterbegin',this._icon);

        return this.$container;
    }
}

export default ActiveSubs;