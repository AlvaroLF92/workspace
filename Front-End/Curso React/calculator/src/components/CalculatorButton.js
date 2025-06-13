
import { Component } from "react";

const styles = {
  BigSize: {
    backgroundColor: 'black',
    borderRadius: '16px',
    fontSize: '30px',
    padding: '5px',
    margin: '5px',
    color: 'white',
    border: 'white solid 2px',
    width: '80px'
  },
  SmallSize: {
    backgroundColor: 'black',
    borderRadius: '16px',
    fontSize: '30px',
    padding: '5px',
    margin: '5px',
    color: 'white',
    border: 'white solid 2px',
    width: '40px',
  },
  ButtonContainer: {
    display: 'inline-block',

  }
}

class CalculatorButton extends Component {
  render() {
    return (
      <div style={styles.ButtonContainer}>
        <button onClick={this.props.execute} style={this.props.size === 'big' ? styles.BigSize : styles.SmallSize}>{this.props.label}</button>
      </div>
    )
  }
}

export default CalculatorButton