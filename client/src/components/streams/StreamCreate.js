import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

class StreamCreate extends Component {
    renderInput({input, label}){
        return (
            <div className="field" >
                <label>{label}</label>
                <input {...input} />
            </div>
            )
    }
    onSubmit(formValues){
        console.log("Form Submit- Redux-form magic", formValues)
    }

    render() {
        //console.log(this.props)
        return (            
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
                <Field name="title" label="Enter Title" component={this.renderInput}/>
                <Field name="description" label="Enter Description" component={this.renderInput}/>
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}

const formWrapped = reduxForm({
                                form: 'streamCreate'
                            })(StreamCreate);
export default connect()(formWrapped);

// This causes error in the console. Due to redux-form ver-8 (latest version)
// export default reduxForm({ form: 'streamCreate' }) (StreamCreate);