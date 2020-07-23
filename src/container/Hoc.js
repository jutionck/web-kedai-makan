import React, {Component} from 'react';
import Addition from "./Addition";
import Substraction from "./Substraction";

class Hoc extends Component {

    constructor(props) {
        super(props);
        this.state = {
            operand1: 0,
            operand2: 0,
            result: null
        }
    }

    onChange = (e) => {
        let name = e.target.name
        this.setState({
            [name]: e.target.value
        })
    }


    handleAddButton = () => {
        this.setState({
            ...this.state, result: <Addition operand1={this.state.operand1} operand2={this.state.operand2}/>
        })
    }

    handleSubButton = () => {
        this.setState({
            ...this.state, result: <Substraction  operand1={this.state.operand1} operand2={this.state.operand2}/>
        })
    }


    render() {
        return (
            <div>
                <input type="number" name="operand1" value={this.state.operand1} onChange={this.onChange} />
                <input type="number" name="operand2" value={this.state.operand2} onChange={this.onChange} />
                <button onClick={this.handleAddButton}>+</button>
                <button onClick={this.handleSubButton}>-</button>
                {this.state.result}
            </div>
        );
    }
}

export default Hoc;