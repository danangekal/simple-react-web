import React, { Component } from 'react';
import { Form, Label } from 'semantic-ui-react';

export default class InputField extends Component {

  constructor(props) {
    super(props);
    this.state = {
      focus: false
    }
  }

  render() {
    const { input, label, type, placeholder,
      meta: { touched, error}
    } = this.props;

    return (
      <div>
        <Form.Input {...input} className='input-custom' label={label} placeholder={placeholder} type={type} />
        {touched && error ? <Label className='input-custom' color='red' pointing>{touched && error ? error : ""}</Label>:null}
      </div>
    )
  }
}