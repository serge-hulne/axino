import { Component } from "./core";


class Canvas {
    context: any;
    node: any;
    constructor(props:any=null) {
        this.node = document.createElement("CANVAS");
        this.context = this.node.getContext("2d");
        ///
        if (props) {
            if (props.parent) {
                props.parent.node.appendChild(this.node);
            }
            if (props.width) {
                this.node.setAttribute("width", props.width);
            } 
            if (props.height) {
                this.node.setAttribute("height", props.height);
            } 
        } 
    }
}

export { Canvas };