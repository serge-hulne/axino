import { Component } from "./core";


class Label extends Component {

    constructor(text: string, props=null) {
        super(props);
        this.htmlString = /*html*/ `<span>${text}</span>`;
        this.createNode();
        ///
        if (props) {
            if (props.parent) {
                this.appendTo(props.parent);
            }
        }
    }

    setText(text) {
        this.node.innerHTML = text;
    }

    getText() {
        return this.node.innerHTML;
    }
}

export { Label };