import { subs_mock } from "../acet/mock.js"

class SubsBtn {
    _count = 0;

    constructor (subs_btn, icon) {
        this.$container = document.createElement('div');
        this.$container.setAttribute('class', 'display_flex');

        this.$subs_Btn = document.createElement('div');
        this.$subs_Btn.setAttribute(
            'class',
            'w-fit h-7 mr-2 display_flex px-2 border border-solid border-gray-200 rounded cursor-pointer text-sm hover:border-gray-300'
        );
        this.$subs_Btn.addEventListener('click', this.onSubs);

        this.$button = document.createElement('button');
        this.$button.innerText = subs_btn;
        this.$button.setAttribute('class', 'ml-2');
  
        this._icon = `${icon}`;
    }

    setNumberSubs () {

    }

    onSubs = (e) => {
        e.preventDefault;

        this._count++;

        subs_mock.forEach((data) => {
            const subs_btn = this.$button.innerText;
            if (subs_btn === data.subs_button || subs_btn === data.on_subs) {
                if (this._count % 2 !== 0) {
                    this.$subs_Btn.classList.add(
                        'text-red-500',
                        'hover:border-red-500'
                    );
                    this.$button.innerText = data.on_subs;
                }
                else {
                    this.$subs_Btn.classList.remove(
                        'text-red-500',
                        'hover:border-red-500'
                    );
                    this.$button.innerText = data.subs_button;
                }
            }
        })

        return this._count;
    }

    render () {
        this.$container.appendChild(this.$subs_Btn);
        this.$subs_Btn.appendChild(this.$button);
        this.$subs_Btn.insertAdjacentHTML('afterbegin',this._icon);

        return this.$container;
    }
}

export default SubsBtn;