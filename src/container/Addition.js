import React from "react";
import WithCal from "./WithCal";

const Addition = (props) => {
    return (
        <div>
            <h3>Hasil Penjumlahan dari {props.operand1} dan {props.operand2}</h3>
            <h3>{props.data}</h3>
        </div>
    )
}

export default WithCal(Addition, (operand1, operand2) => Number(operand1)+Number(operand2));