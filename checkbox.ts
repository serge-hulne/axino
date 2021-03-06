import { Component, log } from "./core";

class CheckBox extends Component {
    
    text : string;
    checked:boolean=false;

    constructor(props:any=null) {

        super(props);
        this.text = "[&nbsp;]";
        this.htmlString = /*html*/ `<button>${this.text}</button>`;
        this.createNode();

        //console.log(this.htmlString);
        if (props) {
            if (props.parent) {
                this.appendTo(props.parent);
            }
            if (props.text){
                this.text = props.text;
            }
        }
    }

    isChecked() : boolean {
        return this.checked;
    }

    setChecked(choice:boolean) {
        this.checked = choice;
        if (choice === true) {
            this.node.innerHTML = /*html*/ `<button>[x]</button>`;
        } else {
            this.node.innerHTML = /*html*/ `<button>[&nbsp;]</button>`;
        }
    }

}

export { CheckBox };  
