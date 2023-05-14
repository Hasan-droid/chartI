import { Component, createElement } from "react";
import Plotly from 'plotly.js';

export class HelloWorldSample extends Component {
    getSymbol(item) {
        const symbols = Object.getOwnPropertySymbols(item);
        const mxSympol = symbols.find(symbol => symbol.toString()==="Symbol(mxObject)");
        // console.info("mxSympol",mxSympol)
        return mxSympol;
    }
    getMXValues(attr){
        const x=this.props.sampleText.map((item, index) => {
            const mysympol=this.getSymbol(item);
             return item[mysympol].jsonData.attributes[attr].value
             
        })
        console.info("x from getMXValues",x)
        return x
        
    }
    createPlotly(){
        setTimeout(() => {
        const DIV=document.getElementById('plotly');
        console.info("DIV",DIV)
        const x=this.getMXValues('Car');
        const y=this.getMXValues('Date');
        console.info("y from createPlotly",y)
        console.info("x from createPlotly",x)
        var trace1 = {
            x:x,
            y:y,
            marker:{
              color: ['rgba(204,204,204,1)', 'rgba(204,204,204,1)','rgba(204,204,204,1)', 'rgba(222,45,38,0.8)', 'rgba(204,204,204,1)', 'rgba(204,204,204,1)' ]
            },
            width: [1, 0.8, 0.8,0.2, 0.8, 0.8],
            type: 'bar',
            text: y.map(String),
            textposition: 'auto'
          };
          
          var data = [trace1];
          
          var layout = {
            title: 'Hasan Chart'
          };
          
         
            Plotly.newPlot(DIV, data, layout);
        }, 300);
        
    }
   
    render(){
        // const div =this.createPlotly();
        // console.info("div",div);
        this.createPlotly()
        return (
            <div>
                <div id='plotly'></div>
                </div>
        )
    //     this.props.sampleText.map((item, index) => {
    //         const mysympol=this.getSymbol(item);
    //         console.info("mysympol",item[mysympol].jsonData.attributes);
    //     });
       
    // }
}
}
