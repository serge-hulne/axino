import { Div } from "./div";

class Select extends Div {
    items: string;
    constructor(props:any) {
        super(props);
        let items = [];
        if (props) {
            if (props.items) {
                items = props.items;
                this.items = "";
                items.forEach((item:any) => {
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

    setChecked(choice:any) {
        this.node.options[this.node.selectedIndex].value = choice;
    }

    click(clickFN:any) {
        this.node.addEventListener("click", clickFN);
    }
}


export { Select };  
