import { Component } from "react";
import Screen from './Screen.js'
import CalculatorButton from './CalculatorButton.js'



class Base extends Component {
  state = {
    executionValue: '',
    firstValue: '',
    operation: ''
  }

  
  excecuteOperation = () => {
    switch (this.state.operation) {
      case '+':
        this.setState(state =>({ ...state, executionValue: parseFloat(state.firstValue) + parseFloat(state.executionValue), firstValue: '' }));
        break;
      case '-':
        this.setState(state =>({ ...state, executionValue: parseFloat(state.firstValue) - parseFloat(state.executionValue), firstValue: '' }));
        break;
      case '*':
        this.setState(state =>({ ...state, executionValue: parseFloat(state.firstValue) * parseFloat(state.executionValue), firstValue: '' }));
        break;
      case '/':
        this.setState(state =>({ ...state, executionValue: parseFloat(state.firstValue) / parseFloat(state.executionValue), firstValue: '' }));
        break;
    }
  }
  calculatorController = ({
    number: [
      {
        label: "0",
        excecute: () => (this.setState(state => ({ ...state, executionValue: state.executionValue + '0' }))),
        size: ""
      },
      {
        label: "1",
        excecute: () => (this.setState(state => ({ ...state, executionValue: state.executionValue + '1' }))),
        size: ""
      },
      {
        label: "2",
        excecute: () => (this.setState(state => ({ ...state, executionValue: state.executionValue + '2' }))),
        size: ""
      },
      {
        label: "3",
        excecute: () => (this.setState(state => ({ ...state, executionValue: state.executionValue + '3' }))),
        size: ""
      },
      {
        label: "4",
        excecute: () => (this.setState(state => ({ ...state, executionValue: state.executionValue + '4' }))),
        size: ""
      },
      {
        label: "5",
        excecute: () => (this.setState(state => ({ ...state, executionValue: state.executionValue + '5' }))),
        size: ""
      },
      {
        label: "6",
        excecute: () => (this.setState(state => ({ ...state, executionValue: state.executionValue + '6' }))),
        size: ""
      },
      {
        label: "7",
        excecute: () => (this.setState(state => ({ ...state, executionValue: state.executionValue + '7' }))),
        size: ""
      },
      {
        label: "8",
        excecute: () => (this.setState(state => ({ ...state, executionValue: state.executionValue + '8' }))),
        size: ""
      },
      {
        label: "9",
        excecute: () => (this.setState(state => ({ ...state, executionValue: state.executionValue + '9' }))),
        size: ""
      },
      {
        label: ".",
        excecute: () => {
          if (!this.state.executionValue.includes('.')) (this.setState(state => ({ ...state, executionValue: state.executionValue + '.' })))
        },
        size: ""
      }
    ],
    operations: [
      {
        label: "+",
        excecute: () => {
          if (!this.state.firstValue) (this.setState(state => ({ ...state, firstValue: state.executionValue, executionValue: '', operation: '+' })))
          else {
            this.excecuteOperation()
            this.setState(state => ({ ...state, firstValue: state.executionValue, executionValue: '', operation: '+' }))
          };
        },
        size: ""
      },
      {
        label: "-",
        excecute: () => {
          if (!this.state.firstValue) (this.setState(state => ({ ...state, firstValue: state.executionValue, executionValue: '', operation: '-' })))
          else {
            this.excecuteOperation()
            this.setState(state => ({ ...state, firstValue: state.executionValue, executionValue: '', operation: '-' }))
          };
        },
        size: ""
      },
      {
        label: "*",
        excecute: () => {
          if (!this.state.firstValue) (this.setState(state => ({ ...state, firstValue: state.executionValue, executionValue: '', operation: '*' })))
          else {
            this.excecuteOperation()
            this.setState(state => ({ ...state, firstValue: state.executionValue, executionValue: '', operation: '*' }))
          };
        },
        size: ""
      },
      {
        label: "/",
        excecute: () => {
          if (!this.state.firstValue) (this.setState(state => ({ ...state, firstValue: state.executionValue, executionValue: '', operation: '/' })))
          else {
            this.excecuteOperation()
            this.setState(state => ({ ...state, firstValue: state.executionValue, executionValue: '', operation: '/' }))
          };
        },
        size: ""
      },
      {
        label: "CE",
        excecute: () => (this.setState({
          executionValue: '',
          firstValue: '',
          operation: ''
        })),
        size: 'big'
      },
      {
        label: "=",
        excecute: () => (this.excecuteOperation()),
        size: 'big'
      }
    ]
  })

  render() {
    return (
      <div style={styles.CalculatorContainer} >
        <div style={styles.CalculatorBox}>
          <Screen value={this.state.executionValue || this.state.firstValue} />
          <div style={styles.ButtonContainer}>
            <div>
              {this.calculatorController.number.map(numberObj => <CalculatorButton label={numberObj.label} execute={numberObj.excecute} size={numberObj.size} />)}
            </div>
            <div>
              {this.calculatorController.operations.map(numberObj => <CalculatorButton label={numberObj.label} execute={numberObj.excecute} size={numberObj.size} />)}
            </div>
          </div>





        </div>
      </div>
    )
  }
}

const styles = {
  ButtonContainer: {
    marginTop: '2rem',
    display: 'flex',
    flexDirection: 'row',
  },
  NumberContainer: {

  },
  OperationContainer: {

  },
  CalculatorContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  CalculatorBox: {
    width: '50%',
    height: '75%',
    marginTop: '15%',
    border: 'black solid 3px',
    padding: '1rem',
    borderRadius: '16px',
    background: 'blue',
  }

}

export default Base