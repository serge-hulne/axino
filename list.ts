import { Div } from "./div";

class List extends Div {
    items: string;
    constructor(props:any) {
        super(props);
        let items = [];
        if (props) {
            if (props.items) {
                items = props.items;
                this.items = "";
                items.forEach( (item:any) => {
                    this.items += `\t<li>${item}</li>\n`
                });
                this.htmlString = `<ul>\n${this.items}</ul>`;
                //console.log(this.htmlString);
                this.createNode();
            }
            if (props.parent) {
                this.appendTo(props.parent);
            }
        }
    }
}

export { List };  
