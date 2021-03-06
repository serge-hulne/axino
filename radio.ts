import { Component } from "./core";

class RadioButton extends Component {
    text: string;
    constructor(props:any) {
        super(props);

        this.htmlString = /*html*/ `<label>
          <input type='radio'>
          <span class="checkable">${this.text}</span>
        </label>`;
        //console.log(this.htmlString);
        this.createNode();
        ///
        if (props) {
            if (props.parent) {
                this.appendTo(props.parent);
            }
            if (props.text) {
                this.text = props.text;
            }
        }
    }

    getChecked() {
        return this.node.options[this.node.RadioButtonedIndex].value;
    }

    setChecked(choice:any) {
        this.node.options[this.node.RadioButtonedIndex].value = choice;
    }

    click(clickFN:any) {
        this.node.addEventListener("click", clickFN);
    }
}


export { RadioButton };  
