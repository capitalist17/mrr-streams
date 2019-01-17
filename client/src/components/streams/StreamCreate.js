import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions';

class StreamCreate extends Component {
    renderError({error, touched}){
        if (touched && error) {
            return (
              <div className="ui error message">
                <div className="header">{error}</div>
              </div>
            );
          }
    }
    renderInput = ({input, label, meta}) => {
        //console.log(meta)
        const classStyle = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={classStyle} >
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
            )
    }
    onSubmit = (formValues) => {
        //console.log("Form Submit- Redux-form magic", formValues)
        this.props.createStream(formValues)
    }

    render() {
        //console.log(this.props)
        return (            
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="title" label="Enter Title" component={this.renderInput}/>
                <Field name="description" label="Enter Description" component={this.renderInput}/>
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}

const validate = formValues => {
    const errors = {};

    if (!formValues.title) {
        errors.title = 'You must enter a title';
    }

    if (!formValues.description) {
        errors.description = 'You must enter a description';
    }

    return errors;
};

const formWrapped = reduxForm({
                                form: 'streamCreate',
                                validate: validate
                            })(StreamCreate);

export default connect(null,{createStream})(formWrapped);

// This causes error in the console. Due to redux-form ver-8 (latest version)
// export default reduxForm({ form: 'streamCreate' }) (StreamCreate);