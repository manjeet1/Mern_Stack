import React, { Component } from "react"

export class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: "",
            emailError: "",
            passwordError: "",
            isSubmitting:false
        }
    }

    handleChange = event => {

        // console.log("event is :",event.target.value)
        //object destruction
        const { name, value } = event.target;
        //console.log("name is :", name)
        //console.log("value is :", value)
        this.setState({
            [name]: value
        }, () => {
            // console.log("this.state is:", this.state)

            this.validateForm(name)

        })

    }


    validateForm = field => {
        var errorMsg = ""
        console.log("field name is€: ", field)
        switch (field) {
            case "email":
                errorMsg = this.state[field]
                    ? ""
                    : "Required Field"
        }

        var errorField = field + "Error";
        this.setState({
            [errorField]: errorMsg

        }, () => {
            // console.log("error in state is :", this.state)
        })

    }

    handleSubmit = event => {
        event.preventDefault()
        this.setState({
            isSubmitting: true
        })
        setTimeout(() => {
            this.setState({
                isSubmitting: false
            })
        }, 3000);
    }


    render() {
        return (
            <>
                <form className="w-50 shadow-lg p-5 m-auto" onSubmit={this.handleSubmit}>
                    <h1>Login</h1>
                    <label htmlFor="email">Email</label>
                    <input type="email" onChange={this.handleChange} name="email" id="email" className="form-control from-control-lg mb-2" />
                    <p className="text-denger" >{this.state.emailError}</p>

                    <label htmlFor="password">Password</label>
                    <input type="password" onChange={this.handleChange} name="password" id="password" className="form-control from-control-lg mb-2" />

                    <button disabled={this.state.isSubmitting} type="submit" className="btn btn-primary" value="Login">Login</button>
                    <p>Don't hava a account?<a href="#">Register</a></p>
                </form>
            </>
        )
    }
}