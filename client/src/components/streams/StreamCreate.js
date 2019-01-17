import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

class StreamCreate extends Component {
    renderInput({input}){
        return <input {...input} />
    }
    render() {
        //console.log(this.props)
        return (            
            <form>
                <Field name="title" component={this.renderInput}/>
                <Field name="description" component={this.renderInput}/>
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