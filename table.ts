import { Div } from "./div";

class Table extends Div {
    props :any;
    constructor(props:any) {
        if (props) {
            super(props);
            this.props = props;
            if (props.rows) {
                this.getHTMLfromJSON(props.rows);
                this.createNode();
            }
            if (props.parent) {
                this.appendTo(props.parent);
            }
        }
    }

    getHTMLfromJSON(lines:any) {
        var tableHeader: string = "";
        var tableBody: string = "";

        Object.entries(lines[0]).forEach(([key, value]) => {
            tableHeader = tableHeader.concat(`<th>${key}</th>`);
        });

        var headNode = `<thead>${tableHeader}</thead>\n`;

        for (let line of lines) {
            var lineString = "";
            Object.entries(line).forEach(([key, value]) => {
                lineString = lineString.concat(`<td>${value}</td>`);
            });
            tableBody = tableBody.concat(`<tr>${lineString}</tr>\n`);
        }

        var bodyNode = `<tbody>${tableBody}</tbody>`;

        if (this.props.header) {
            this.htmlString = `<table class="primary">${headNode}\n${bodyNode}</table>`;
        } else {
            this.htmlString = `<table class="primary">${bodyNode}</table>`;
        }
        //console.log(this.htmlString);
    }
}

export { Table };

