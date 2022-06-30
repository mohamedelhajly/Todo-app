import React, { Component } from 'react'
import {Form , Button } from 'react-bootstrap'
import {UserLogin} from './API/main'


export default class Loginuser extends Component {

    state = {
        
        email : "",
        password : ""
    }

    HandleChange = (target) => {
        this.setState({[target.target.name]: target.terget.value})
        
}
HandleSubmite = (target) => {
    this.preventDefault();
    UserLogin(this.state)
}
render() {
    return (
<div>
    <Form onSubmit={this.HandleSubmite.bind(this)}>
        <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control name="email" required type="text" onChange={this.HandleChange.bind(this)}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" required type="Password" onChange={this.HandleChange.bind(this)}></Form.Control>
                    </Form.Group>
                    <Button type="submit">Login</Button>
                    </Form>

</div>
 )
}
}
