import { subs_mock } from "../acet/mock.js"
import SubsBtn from "./subscribe_button.js";
import ActiveSubs from "./active_subscribe.js";

class Subs {
    constructor () {
        this.$container = document.createElement('div');
        this.$container.setAttribute('class', 'mt-4 display_flex');

        this.$subs_btn = document.createElement('div');
        this.$subs_btn.setAttribute('class', 'display_flex');

        this.$active_subs = document.createElement('div');
        this.$active_subs.setAttribute('class', 'display_flex');
    }

    render () {
        this.$container.appendChild(this.$subs_btn);
        this.$container.appendChild(this.$active_subs);

        subs_mock.forEach((data) => {
            const subs_btn = new SubsBtn(data.subs_button, data.icon);
            this.$subs_btn.appendChild(subs_btn.render());

            const active_subs = new ActiveSubs(subs_btn._count, data.icon);
            active_subs.render(this.$active_subs);
        });

        return this.$container;
    }
}

export default Subs;