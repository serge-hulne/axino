import { Component } from "./core";

class CheckBox extends Component {
    text : string;
    constructor(props) {
        super(props);
        this.htmlString = /*html*/ `<label>
        <input type="checkbox">
        <span class="checkable">${this.text}</span>
      </label>`;
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

    getChecked() {
        return this.node.options[this.node.CheckBoxedIndex].value;
    }

    setChecked(choice) {
        this.node.options[this.node.CheckBoxedIndex].value = choice;
    }

    click(clickFN) {
        this.node.addEventListener("click", clickFN);
    }
}


export { CheckBox };  
