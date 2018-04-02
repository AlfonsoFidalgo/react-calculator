import React, { Component } from 'react';
import Results from './Results';

class Calculator extends Component {
  state = {
    previousValue: 0,
    value: 0,
    operation: 'sum'
  }

  valueHandler = (n) => {
    const oldValue = this.state.value;
    if (oldValue !== 0){
      const updatedValue = oldValue + String(n);
      this.setState({
        value: updatedValue
      })
    } else {
      const updatedValue = String(n);
      this.setState({
        value: updatedValue
      })
    }
  }

  operationHandler = (op) => {
    this.setState({
      previousValue: Number(this.state.value),
      value: 0,
      operation: op
    })
  }

  executeOperation = () => {
    const currentNumber = Number(this.state.value);
    switch (this.state.operation) {
      case 'sum':
        this.setState({
          value: currentNumber + this.state.previousValue,
          previousValue: currentNumber + this.state.previousValue
        });
        break;
      case 'div':
        this.setState({
          value: this.state.previousValue / currentNumber,
          previousValue: this.state.previousValue / currentNumber
        });
        break;
      case 'mult':
        this.setState({
          value: currentNumber * this.state.previousValue,
          previousValue: currentNumber * this.state.previousValue
        });
        break;
      case 'sub':
        this.setState({
          value: this.state.previousValue - currentNumber,
          previousValue: this.state.previousValue - currentNumber
        });
        break;
      default:

    }
  }

  render(){
    return (
      <div>
        <Results value={this.state.value}/>
        <br/>
        <button onClick={() => this.valueHandler(7)}>7</button>
        <button onClick={() => this.valueHandler(8)}>8</button>
        <button onClick={() => this.valueHandler(9)}>9</button>
        <button onClick={() => this.operationHandler('mult')}>X</button>
        <br/>
        <button onClick={() => this.valueHandler(4)}>4</button>
        <button onClick={() => this.valueHandler(5)}>5</button>
        <button onClick={() => this.valueHandler(6)}>6</button>
        <button onClick={() => this.operationHandler('sub')}>-</button>
        <br/>
        <button onClick={() => this.valueHandler(1)}>1</button>
        <button onClick={() => this.valueHandler(2)}>2</button>
        <button onClick={() => this.valueHandler(3)}>3</button>
        <button onClick={() => this.operationHandler('sum')}>+</button>
        <br/>
        <button onClick={() => this.operationHandler('div')}>/</button>
        <button onClick={() => this.valueHandler(0)}>0</button>
        <button>.</button>
        <button onClick={() => this.executeOperation()}>=</button>
      </div>
    )
  }
};

export default Calculator;
