import { Div } from "./div";

class Form extends Div {
    constructor(props:any) {
        if (props) {
            super(props);
            let items = [];
            this.htmlString = `<form></form>`;
            this.createNode();
            if (props.parent) {
                this.appendTo(props.parent);
            }
            this.node.style.borderWitdh = "1px";
            this.node.style.borderStyle = "solid";
            this.node.style.borderColor = "lightgrey";
            this.node.style.padding = "5px";
        }
    }
}

export { Form };  