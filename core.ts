// Imported Constants:
import { colors } from "./constants";

// Constants:
const log = console.log;
const root: any = { base: document, node: document.body };

// Utilities:
function html(strings: TemplateStringsArray, ...values: any) {
    let str = '';
    strings.forEach((string, i) => {
        str += string + (values[i] || '');
    });
    return str;
}


// class Component(text: string = '',  props : object = null, htmlString: string) {

class Component {

    // Data members:
    text: string = '';
    props: object = {};
    htmlString: string = '';
    node: any;
    parent: Component;

    // Constructor:
    constructor(props: any = {}) {
        if (props || this.htmlString) {
            this.props = props;

            if (props.text) {
                this.text = props.text;
            }

            if (props.htmlString) {
                this.htmlString = props.htmlString;
                this.createNode();
            }

            if (this.htmlString.length > 0) {
                this.createNode();
            }

            if (props.parent) {
                this.parent = props.parent;
            }

        }
    }

    // Node:
    createNode() {
        this.node = document.createElement('div');
        this.node.innerHTML = this.htmlString;
    }

    delete() {
        var temp = this.node;
        var parent = this.node.parentNode
        parent.removeChild(temp);
    }

    appendTo(other: Component) {
        other.node.appendChild(this.node);
    }


    appendToApp() {
        this.appendTo(root);
    }

    replaceBy(other: Component) {
        let temp = this.node;
        //log({temp: temp});
        let parent = temp.parentNode;
        //log({parent: parent});
        parent.replaceChild(other.node, temp);
    }

    // Node attributes:

    setBackgroundColor(color: string) {
        this.node.style.backgroundColor = color;
    }

    setColor(color: string) {
        this.node.style.color = color;
    }

    getStyle(): object {
        return this.node.style;
    }

    setStyle(property: string, style: string) {
        this.node.style.setProperty(property, style);
    }

    setId(id: string) {
        this.node.id = id;
    }

    getID(): string {
        return this.node.id;
    }

    // basic element styling:

    Width(value: string){
        this.node.style.width = value; 
    }

    Height(value: string){
        this.node.style.height = value; 
    }

    Padding(value: string){
        this.node.style.padding = value; 
    }

    Margin(value: string){
        this.node.style.margin = value; 
    }

    Border() {
        this.node.style.borderWitdh = "1px";
        this.node.style.borderStyle = "solid";
        this.node.style.borderColor = "lightgrey";
    }

    BorderLeft() {
        this.node.style.borderLeft = "1px";
        this.node.style.borderStyle = "solid";
        this.node.style.borderColor = "white";
    }

    BorderRight() {
        this.node.style.borderRight = "1px";
        this.node.style.borderStyle = "solid";
        this.node.style.borderColor = "white";
    }

    BorderWidth(value: string){
        this.node.style.borderWidth= value;
    }

    BorderRadius(value: string){
        this.node.style.borderRadius= value;
    }

    Attribute(key: string, value:string) {
        this.node.setAttribute(key, value);
    }

    // Hints / tips:
    Tip(text: string){
        this.Attribute("data-tooltip", text);
        this.Attribute("class", "tooltip-top");
    }

    TipLeft(text: string){
        this.Attribute("data-tooltip", text);
        this.Attribute("class", "tooltip-left");
    }

    TipRight(text: string){
        this.Attribute("data-tooltip", text);
        this.Attribute("class", "tooltip-right");
    }

    TipBottom(text: string){
        this.Attribute("data-tooltip", text);
        this.Attribute("class", "tooltip-bottom");
    }


    // Listeners
    onClick(clickFN: any) {
        this.node.addEventListener("click", clickFN);
    }
    
    // Generic listeners ("hover", "blur", "modified" etc):
    onEvent(event: string, clickFN: any) {
        this.node.addEventListener(event, clickFN);
    }
}



// Utility functions:

function getNodeByID(id: string): HTMLElement {
    return document.getElementById(id);
}


function getNodesByClass(cls: string): HTMLCollectionOf<Element> {
    return document.getElementsByClassName(cls);
}


// Exports

// log(), html, root, Component, getNode*
//module.exports = {html, log, root, getNodeByID, getNodesByClass, Component};
export { html };
export { log };
export { root };
export { getNodeByID };
export { getNodesByClass };
export { Component };

