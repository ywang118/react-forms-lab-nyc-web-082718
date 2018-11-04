import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
      remaining: this.props.maxChars
    };
  }

  handleChange = (e)=> {

    this.setState({
      inputValue: e.target.value,
      remaining: this.props.maxChars - this.state.inputValue.length
    })
  }


  render() {
    console.log(this.state.inputValue)
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text"  value={this.state.inputValue} onChange={this.handleChange.bind(this)}/>
        <p> {this.props.maxChars-this.state.inputValue.length} Characters Remaining</p>
      </div>
    );
  }
}

export default TwitterMessage;
