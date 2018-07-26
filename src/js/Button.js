import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';


class ButtonClick extends React.Component {
  //function ButtonClick() {
  //class ButtonClick extends React.Component {

    constructor(props) {
      super(props);
 
      this.state = {
        content: "CREATE SAVINGS"
      };
    }

     handleClick = () => {
        var self = this;
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(function (response) {
          self.setState({content: "10142100486427610"});
        })
        .catch(function (error) {
          console.log(error);
        });
      }
    



  render() {
    const { 
      variant,
      color,
      number
    } = this.props;

    return (
      <Button variant={variant} color={color} onClick={this.handleClick}> {this.state.content} </Button>
      );
        
    }

  }
    
  export default ButtonClick
