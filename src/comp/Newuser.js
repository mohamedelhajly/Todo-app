import React , {Component} from 'react'
import {Form , Button } from 'react-bootstrap'
import UserRegister from './API/main'
//import { TurboModuleRegistry } from 'react-native'
export default class NewUser extends Component {

    state = {
        name : "",
        email : "",
        password : "",
        age :0
    }
   //handle changes
    HandleChange = (target) => {
        console.log(target)
        this.setState({[target.target.name]: target.terget.value})
        
}
HandleSubmite = (target) => {
    this.preventDefault();
    UserRegister(this.state)
}

    render(){
        return (
            <div>
                <Form onSubmit={this.HandleSubmite.bind(this)}>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control name="name" required type="text" onChange={this.HandleChange.bind(this)}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control name="email" required type="text" onChange={this.HandleChange.bind(this)}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" required type="Password" onChange={this.HandleChange.bind(this)}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Age</Form.Label>
                        <Form.Control name="age" required type="Number" onChange={this.HandleChange.bind(this)}></Form.Control>
                    </Form.Group>
                    <Button type="submit">Submit</Button>

                </Form>
            </div>
        )
    }
}
