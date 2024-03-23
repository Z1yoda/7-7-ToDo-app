import { useState, useRef } from 'react'
import './App.css'
import { addTodo, statusUpdate, removeToDo, updateToDo } from './redux/todoSlicer'
import { useSelector, useDispatch } from 'react-redux'

function App() {
  const name = useRef()
  const todos = useSelector(state => state.todo.todos)
  const dispatch = useDispatch()
  console.log(todos);

  function handleSubmit(e) {
    e.preventDefault()

    if (!name.current.value) {
      alert("Enter input value!")
    } else {
      const todo = {
        id: Date.now(),
        title: name.current.value,
        status: false
      }

      dispatch(addTodo(todo))
      name.current.value = ""
    }


  }

  function handleStatusCheck(id, status) {
    dispatch(statusUpdate({ id, status }))

  }

  function handleDelete(id) {
    const isDeleted = confirm("Are your sure?")

    if (isDeleted) {
      dispatch(removeToDo(id))
    }
  }

  function handleUpdate(id) {
    const title = prompt("Enter new value")

    dispatch(updateToDo({ id, title }))
  }

  return (
    <>
      <div className="container w-50 max-auto mt-3 bg-info p-4">
        <form onSubmit={handleSubmit} className='d-flex' >
          <input style={{ marginRight: "5px" }} ref={name} type="text" className='form-control' placeholder='Enter todo...' />
          <button className='btn btn-success'>ADD</button>
        </form>

        <div className="todo-wrapper">
          {
            todos.length > 0 && todos.map((el, index) => {
              return (
                <div key={index} className="todo-item d-flex justify-content-between align-items-center mt-3">
                  <div className="name-check d-flex align-items-center gap-2">
                    <input onChange={(e) => { handleStatusCheck(el.id, e.target.checked) }} className='form-check-input' type="checkbox" value="" id={`checkbox-${el.id}`} checked={el.status} />
                    <p style={{ textDecoration: el.status ? "line-through" : "none" }} className='mb-0'>{el.title}</p>

                  </div>

                  <div className="actions d-flex gap-2">
                    <button className='btn btn-primary' onClick={() => { handleUpdate(el.id) }}>Edit</button>
                    <button className='btn btn-danger' onClick={() => { handleDelete(el.id) }}>Delete</button>
                  </div>
                </div>
              )
            })
          }

        </div>
      </div>
    </>
  )
}

export default App
