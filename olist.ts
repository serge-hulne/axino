import { Div } from "./div";

class Olist extends Div {
    items: string;
    constructor(props) {
        super(props);
        let items = [];
        if (props) {
            if (props.items) {
                items = props.items;
                this.items = "";
                items.forEach(item => {
                    this.items += `\t<li>${item}</li>\n`
                });
                this.htmlString = `<ol>\n${this.items}</ol>`;
                //console.log(this.htmlString);
                this.createNode();
            }
            if (props.parent) {
                this.appendTo(props.parent);
            }
        }
    }
}

export { Olist };  
