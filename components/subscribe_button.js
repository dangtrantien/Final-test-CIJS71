import { subs_mock } from "../acet/mock.js";
import { auth } from "../constants/commons.js";

class SubsBtn {
    constructor(subs_btn, icon) {
        this._user = auth.currentUser.uid;

        this.$container = document.createElement('div');
        this.$container.setAttribute('class', 'display_flex');

        this.$subs_btn = document.createElement('div');
        this.$subs_btn.setAttribute(
            'class',
            'w-fit h-7 mr-2 display_flex px-2 border border-solid border-gray-200 rounded cursor-pointer text-sm hover:border-gray-300'
        );
        this.$subs_btn.addEventListener('click', this.onSubs);

        this.$button = document.createElement('button');
        this.$button.innerText = subs_btn;
        this.$button.setAttribute('class', 'ml-2');

        this._icon = icon;
    }

    onSubs = (e) => {
// <<<<<<< Updated upstream
        e.preventDefault();

// =======
        e.preventDefault;

        this._count++;
// >>>>>>> Stashed changes
        subs_mock.forEach((data) => {
            const subs_btn = this.$button.innerText;

            if (subs_btn === data.subs_button || subs_btn === data.on_subs) {
                if (subs_btn === data.subs_button) {
                    this.$subs_btn.classList.add(
                        'text-red-500',
                        'hover:border-red-500'
                    );
                    this.$button.innerText = data.on_subs;
                }
                else {
                    this.$subs_btn.classList.remove(
                        'text-red-500',
                        'hover:border-red-500'
                    );
                    this.$button.innerText = data.subs_button;
                }
            }
        })
    }

    render() {
        this.$container.appendChild(this.$subs_btn);
        this.$subs_btn.appendChild(this.$button);
        this.$subs_btn.insertAdjacentHTML('afterbegin', this._icon);

        return this.$container;
    }
}

export default SubsBtn;