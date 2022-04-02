class Input {
    constructor(tag_name, type, placeholder, error) {
        this.$container = document.createElement('div');

        this.$tag_name = document.createElement('layer');
        this.$tag_name.innerText = tag_name;
        this.$tag_name.setAttribute(
            'class',
            'mb-4 text-white text-2xl'
        );

        this.$input = document.createElement('input');
        this.$input.type = type;
        this.$input.placeholder = placeholder;
        this.$input.setAttribute(
            'class',
            'w-full h-8 p-2 rounded-lg focus:outline-none'
        );

        this.$error = document.createElement('div');
        this.$error.innerText = error;
        this.$error.setAttribute(
            'class',
            'invisible text-red-500 text-sm'
        );

    }

    getValue() {
        return this.$input.value;
    }

    warning(value, valid_value) {
        if (!value.match(valid_value)) {
            this.$error.classList.replace('invisible', 'visible');
        }
        else {
            this.$error.classList.replace('visible', 'invisible');
        }
    }

    render() {
        this.$container.appendChild(this.$tag_name);
        this.$container.appendChild(this.$input);
        this.$input.insertAdjacentElement('afterend', this.$error);

        return this.$container;
    }
}

export default Input;