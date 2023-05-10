import { Component, createElement } from "react";

import { HelloWorldSample } from "./components/HelloWorldSample";
import "./ui/CustomeChart.css";

export default class CustomeChart extends Component {
    constructor(props) {
        super(props);
        const data=props.data;
        console.info   ("props" ,data)
    }
   
    componentWillReceiveProps(nextProps) {
        console.info("componentWillReceiveProps", nextProps);
    }
    
    render() {
        return this.props.data.status === "available" ? (
            <div className="widget-hello-world">
                <HelloWorldSample sampleText={this.props.data.items} />
            </div>
        ) : (
           null
        );

    }
}
