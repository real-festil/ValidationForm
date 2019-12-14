import React from 'react';
import classes from './Form.module.css'

function validate(name, lastname, email, phone, country) {
    const errors = [];
    console.log(name)
    if (name === '') {
        errors.push("First name can't be empty");
    }

    if (lastname === '') {
        errors.push("Last name can't be empty");
    }

    if (email === '') {
        errors.push("Email can't be empty")
    }
    if (email.split("").filter(x => x === "@").length !== 1) {
        errors.push("Email should contain a @");
    }

    if (email.indexOf(".") === -1) {
        errors.push("Email should contain one dot");
    }

    if ( !/^[0-9]+$/.test(phone) ) {
        errors.push("Phone must contain numbers only");
    }

    if (country === '') {
        errors.push("Country can't be empty")
    }

    return errors;
}

class FormComponent extends React.Component {

    state = {
        name: "",
        lastname: "",
        email: "",
        phone: "",
        country: "",
        errors: []
    }

    submitHandler = (e) => {
        e.preventDefault();
        const {name, lastname, email, phone, country} = this.state;
        const errors = validate(name, lastname, email, phone, country);
        if (errors.length > 0) {
            this.setState({errors});
            return;
        } else {
            this.setState({errors});
            setTimeout(()=>(alert('success')),0)
            return;
        }

    }

    render () {
        const errors = this.state.errors;
        return (
            <form onSubmit={this.submitHandler}>
                <label>First Name</label>
                <input
                    value={this.state.name}
                    onChange={evt => this.setState({ name: evt.target.value})}
                    placeholder="First Name"
                    type="text"/>
                <label>Last Name</label>
                <input
                    value={this.state.lastname}
                    onChange={evt => this.setState({ lastname: evt.target.value})}
                    placeholder="Last Name"
                    type="text"/>
                <label>Email</label>
                <input
                    value={this.state.email}
                    onChange={evt => this.setState({ email: evt.target.value})}
                    placeholder="Email"
                    type="text"/>
                <label>Phone</label>
                <input
                    value={this.state.phone}
                    onChange={evt => this.setState({ phone: evt.target.value})}
                    placeholder="Phone"
                    type="text"/>
                <label>County</label>
                <input
                    value={this.state.country}
                    onChange={evt => this.setState({ country: evt.target.value})}
                    placeholder="Country"
                    type="text"/>
                <button type="submit">Submit</button>
                <div className={classes.Errors}>
                    {errors.map(error => (
                        <p>Error: {error}</p>
                    ))}
                </div>
            </form>
        )
    }
}

export default FormComponent;