import { Component } from "./core";


class TextArea extends Component {

    constructor(props:any) {
        if (props) {
            super(props);
            this.htmlString = /*html*/ `<textarea type="text" class="form-TextArea"></textarea>`;
            this.createNode();
            if (props.parent) {
                this.appendTo(props.parent);
            }
            if (props.hint){
                this.setPlaceholder(props.hint);
            }
        }
    }

    setText(text:string) {
        this.node.value = text;
    }

    getText() {
        return this.node.value;
    }

    setPlaceholder(text: string) {
        this.node.placeholder = text;
    }

    setRow(r: string) {
        this.node.rows = r;
    }

    setCols(c: string) {
        this.node.cols = c;
    }

    setWidth(w: string) {
        this.node.style.width = w;
    }

    setHeight(h: string) {
        this.node.style.height = h;
    }
}

export { TextArea };