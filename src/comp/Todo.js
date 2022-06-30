import React, { Component } from 'react'
import {Table, Button, Model} from 'react-bootstrap'
import { GetTodos } from './API/main'


export default class Todo extends Component {
    componentDidMount(){
        let data = GetTodos().then(e=> console.log(e))
    }

render() {
    return (
        <div>
            <Table>
        <thead><tr>
                <th>#</th>
                <th>Created at</th>
                <th>Description</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                <td> #</td>
                <td>Description </td>
                <td>1234</td>
                <td>done</td>
                <td>Delete</td>
                </tr>
            </tbody> 
            
            
            </Table>
            
        </div>
    )
}
}
