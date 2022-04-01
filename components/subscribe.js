import { subs_mock } from "../acet/mock.js"
import SubsBtn from "./subscribe_button.js";
import ActiveSubs from "./active_subscribe.js";

class Subs {
    constructor() {
        this.$container = document.createElement('div');
        this.$container.setAttribute('class', 'py-4 display_flex border-b');

        this.$subs_btn_box = document.createElement('div');
        this.$subs_btn_box.setAttribute('class', 'display_flex');

        this.$active_subs_box = document.createElement('div');
        this.$active_subs_box.setAttribute('class', 'display_flex');

        this.createSubsBtn();
    }

    createSubsBtn() {
        subs_mock.forEach((data) => {
            const subs_btn = new SubsBtn(data.subs_button, data.icon);
            this.$subs_btn_box.appendChild(subs_btn.render());

            const active_subs = new ActiveSubs(data.icon);
            this.$active_subs_box.appendChild(active_subs.render());
        });
    }

    render() {
        this.$container.appendChild(this.$subs_btn_box);
        this.$container.appendChild(this.$active_subs_box);

        return this.$container;
    }
}

export default Subs;