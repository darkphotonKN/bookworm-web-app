
import React, { Component } from 'react';
import InlineError from '../messages/InlineError';
import PropTypes from 'prop-types';

class LoginForm extends Component {
    state = {
        // store all form data 
        data: {
            email: '',
            password: ''
        }, 
        loading: false,
        errors: {}
    }
    
    onChange = (event) => {
        this.setState({ 
            data: { ...this.state.data, [event.target.name]: event.target.value }
        });
    }

    // validate data, and pass it to submit fn
    onSubmit = (event) => {
        event.preventDefault();
        const errors = this.validate(this.state.data);
        this.setState({ errors }); // set errors if there are any 

        // check number of keys of errors to check if there are any
        // if not submit with submitted data
        if(Object.keys(errors).length === 0) {
            this.props.submit(this.state.data);
        }
    }

    validate = (data) => {
        const errors = {};
        // set inside errors object error message
        if(!data.email) errors.email = "Email invalid.";
        if(!data.password) errors.password = "Can't be blank."; 
        return errors;
    }

    render() { 
        const { data, errors } = this.state;

        return ( 
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    { errors.email === undefined ? null : <InlineError className="form-error-msg" error={this.state.errors.email} /> }
                    <input 
                        type="email" 
                        className={ errors.email === undefined ? 'form-control' : 'form-control is-invalid' } 
                        id="email" 
                        name="email" 
                        placeholder="(example@example.com)..."
                        value={data.email}
                        onChange={(event) => this.onChange(event)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    { errors.password === undefined ? null : <InlineError className="form-error-msg" error={this.state.errors.password} /> }
                    <input 
                        type="password" 
                        className={ errors.password === undefined ? 'form-control' : 'form-control is-invalid' } 
                        id="password" 
                        name="password" 
                        placeholder="password..."
                        value={data.password}
                        onChange={(event) => this.onChange(event)}
                    />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        );
    }
}

LoginForm.propTypes = {
    submit: PropTypes.func.isRequired
}
 
export default LoginForm;