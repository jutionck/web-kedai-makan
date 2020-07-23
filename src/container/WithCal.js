import React, {Component} from "react";

export default function WithCal(WrappedComponent, calculation) {

    return class extends Component {

        state = {
            result: 0
        }

        doPrintResult = (result) => {
            this.setState({
                result: Number(result)
            })
        }

        componentDidMount() {
            this.doPrintResult(calculation(this.props.operand1, this.props.operand2));
        }

        render() {
            return <WrappedComponent data={this.state.result} {...this.props} />
        }

    }

}