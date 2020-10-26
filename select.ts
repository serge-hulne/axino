import { Div } from "./div";

class Select extends Div {
    items: string;
    constructor(props) {
        super(props);
        let items = [];
        if (props) {
            if (props.items) {
                items = props.items;
                this.items = "";
                items.forEach(item => {
                    this.items += `\t<option value="${item}">${item}</option>`
                });
                this.htmlString = `<select>\n${this.items}</select>`;
                //console.log(this.htmlString);
                this.createNode();
            }
            if (props.parent) {
                this.appendTo(props.parent);
            }
        }
    }

    getChecked() {
        return this.node.options[this.node.selectedIndex].value;
    }

    setChecked(choice) {
        this.node.options[this.node.selectedIndex].value = choice;
    }

    click(clickFN) {
        this.node.addEventListener("click", clickFN);
    }
}


export { Select };  
