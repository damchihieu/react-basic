import React from "react";
import './ListTodo.scss';
import AddTodo from "./AddTodo";
import { toast } from 'react-toastify';
import Color from "../HOC/color";


class ListTodo extends React.Component{

    state = {
        ListTodo: [
            { id:'todo1', title: 'Doing homework'},
            { id:'todo2', title: 'Making videos'},
            { id:'todo3', title: 'Fixing bugs'}
        ],editTodo: {}
    }
    addNewTodo = (todo) =>{
        this.setState({
            ListTodo:[...this.state.ListTodo, todo]
        })
        toast.success("Wow so easy!")
    }
    handleDelete = (todo) =>{
        let currentodo =this.state.ListTodo;
        currentodo = currentodo.filter(item => item.id !== todo.id)
        this.setState({
            ListTodo: currentodo
        })
        toast.success('Delete success')
    }
    handleEditTodo = (todo) =>{
        let { editTodo,ListTodo } = this.state;
        let isEmpty = Object.keys(editTodo).length === 0;
        //save
        if(isEmpty === false && editTodo.id === todo.id){
            let ListTodoCopy = [...ListTodo];
            let objIndex = ListTodoCopy.findIndex((item => item.id === todo.id));
            ListTodoCopy[objIndex].title = editTodo.title

            this.setState({
                ListTodo: ListTodoCopy,
                editTodo: ''
            })
            toast.success('Updata Todo success')
            return;
        }
        this.setState({
            editTodo: todo
        })
    }
    handleOnchangeEditTodo = (event) =>{
        let editTodoCopy = {...this.state.editTodo};
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }

    render() {
        let {ListTodo,editTodo} = this.state;
        let isEmpty = Object.keys(editTodo).length === 0;
        console.log('>>>> check empty objec',isEmpty)

        return(
            <>
                <p>
                Singple TODO Apps With Reactjs(Hieu &amp; Tu Hoc Sang Tao)
                </p>
                <div className="list-todo-conteiner">
                    <AddTodo
                        addNewTodo = {this.addNewTodo}
                    />
                    <div className="list-todo-content">
                        {ListTodo && ListTodo.length>0 &&
                            ListTodo.map((item,index)=>{
                                return(
                                    <div className="todo-child" key={item.id}>
                                        {isEmpty === true ?
                                            <span> {index +1}-{item.title} </span>
                                            :
                                            <>
                                                {editTodo.id === item.id ?
                                                <span>
                                                    {index + 1} - <input 
                                                    value={editTodo.title}
                                                    onChange={(event) => this.handleOnchangeEditTodo(event)}
                                                    />
                                                </span>
                                                :
                                                <span> {index +1}-{item.title} </span>
                                                }
                                            </>
                                        }
                                        <button className="Edit"
                                            onClick={() => this.handleEditTodo(item)}
                                        >
                                            {isEmpty === false && editTodo.id === item.id ?
                                            'Save':"Edit"
                                            }
                                        </button>
                                        <button className="Delete"
                                        onClick={() => this.handleDelete(item) }
                                        >Delete</button>
                                    </div>
                                )
                            })

                        }
                    
                    </div>
                </div>
            </>
        )
    }
}

export default Color(ListTodo);