import { Component } from "react";

const styles = {
  Screen: {
    padding: '20px',
    backgroundColor: 'black',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: '40px',
    borderRadius: '10px',
    border: 'black solid 2px'
  }
}

class Screen extends Component {
  render () {
    return (
      <div style={styles.Screen} >
      {this.props.value ? this.props.value : 0}
      </div>
    )
  }
}

export default Screen