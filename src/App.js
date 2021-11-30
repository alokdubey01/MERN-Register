import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'

export default class App extends Component {
    constructor(){
        super()
        this.state = {
            fullname:'',
            username:'',
            email:'',
            password:''
        }
        this.changeFullName = this.changeFullName.bind(this)
        this.changeUsername = this.changeUsername.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    changeFullName(event){
        this.setState({
            fullname:event.target.value
        })
    }
    changeUsername(event){
        this.setState({
            username:event.target.value
        })
    }
    changeEmail(event){
        this.setState({
            email:event.target.value
        })
    }
    changePassword(event){
        this.setState({
            password:event.target.value
        })
    }
    onSubmit(event){
        event.preventDefault()
        const registerd = {
            fullname:this.state.fullname,
            username:this.state.username,
            email:this.state.email,
            password:this.state.password
        }
        axios.post("http://localhost:4000/app/signup", registerd)
        .then(res => {
            console.log(res.data);
        })
        // window.location("/")
        this.setState({
            fullname:'',
            username:'',
            email:'',
            password:''
        })
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="form-div">
                        <form onSubmit={this.onSubmit}>
                            <input type="text" name="" id="" placeholder="Full Name" onChange={this.changeFullName} value={this.state.fullname} className="form-control form-group"/>
                            <input type="text" name="" id="" placeholder="Username" onChange={this.changeUsername} value={this.state.username} className="form-control form-group"/>
                            <input type="email" name="" id="" placeholder="Email" onChange={this.changeEmail} value={this.state.email} className="form-control form-group"/>
                            <input type="password" name="" id="" placeholder="Password" onChange={this.changePassword} value={this.state.password} className="form-control form-group"/>
                            <input type="submit" value="Submit" className="btn btn-danger btn-block"/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
