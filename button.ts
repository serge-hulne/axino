import { Component } from "./core";


class Button extends Component {
    constructor(text: string, props:any=null) {
        super(props);
        this.htmlString = /*html*/ `<button>${text}</button>`;
        this.createNode();
        ///
        if (props) {
            if (props.parent) {
                this.appendTo(props.parent);
            }
            if (props.tip) {
                this.Tip(props.tip)
            } 
        } 
 
    }
}

export { Button };