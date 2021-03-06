import { Component } from "./core";


class Input extends Component {

    constructor(text: string) {
        super(null);
        this.htmlString = /*html*/ `<input type="text">`;
        this.createNode();
    }

    setText(text:any) {
        this.node.innerHTML = text;
    }

    getText() {
        return this.node.value;
    }

    setPlaceholder(text: string) {
        this.node.placeholder = text;
    }
}

export { Input };