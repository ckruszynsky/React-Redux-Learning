import React from "react";
import { Sparklines, SparklinesLine, SparklinesBars, SparklinesReferenceLine} from "react-sparklines";
import  _ from 'lodash';

function average(data) {
    return _.round(_.sum(data)/data.length);
}

const Chart = props => {
  return (
    <div>
      <Sparklines height={100} width={150} data={props.data} >
         <SparklinesLine color={props.color} />          
         <SparklinesReferenceLine type="avg" />         
      </Sparklines>
      <div>{average(props.data)} {props.units}</div>
    </div>
  );
};

export default Chart;