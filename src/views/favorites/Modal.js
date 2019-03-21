import React from 'react';
import Modal, {closeStyle} from 'simple-react-modal'
import Link from 'react-router-bootstrap';
 
export default class ModalSimple extends React.Component{
 
  constructor(){
    super()
    this.state = {}
  }
 
  show(){
    this.setState({show: true})
  }
 
  close(){
    this.setState({show: false})
  }
 
 
  render(){
    return (
      <div>
      <Link onClick={this.show.bind(this)}>Open Modal</Link>
      <Modal
      className="test-class" //this will completely overwrite the default css completely
      style={{background: 'red'}} //overwrites the default background
      containerStyle={{background: 'blue'}} //changes styling on the inner content area
      containerClassName="test"
      closeOnOuterClick={true}
      show={this.state.show}
      onClose={this.close.bind(this)}>
 
      <Link style={closeStyle} onClick={this.close.bind(this)}>X</Link>
      <div>hey</div>
 
      </Modal>
      </div>
    )
  }
}
