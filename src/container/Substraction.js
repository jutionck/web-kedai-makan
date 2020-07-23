import React from "react";
import WithCal from "./WithCal";

const Substraction = (props) => {
    return (
        <div>
            <h3>Hasil Pengurangan dari {props.operand1} dan {props.operand2}</h3>
            <h3>{props.data}</h3>
        </div>
    )
}

export default WithCal(Substraction, (operand1, operand2) => Number(operand1) - Number(operand2));