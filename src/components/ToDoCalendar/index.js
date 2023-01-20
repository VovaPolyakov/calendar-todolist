import React, { useContext, useState } from 'react'
import Calendar from 'react-calendar';
// import '../../../node_modules/react-calendar/dist/Calendar.css'
import 'react-calendar/dist/Calendar.css';
import '../../style/Calendar.css'
import { ToDoContext } from '../../Context/ToDoContext';

const ToDoCalendar = () => {
  const [date,setDate] = useState(new Date())
  const [value,setValue] = useState('')
  const {removeToDo,setToDo,toDo} = useContext(ToDoContext)

  const handleChange = (e) => {
    setValue(e.target.value)

  }
  const handleAdd = () => {
    setToDo({
      items:[
        ...toDo.items,
        {id:toDo.items.length + 1,name:value,date:date.toLocaleDateString(),status:true}
      ]
    })
    setValue('')
  }
  const handleDelete = (e) => {
    toDo.items.map((item) => {
      if(e.target.id == item.id){
        removeToDo(item)
      }
    })
  }
  return (
    <div className='calendar-container'>
      <div>
        <Calendar onChange={setDate} value={date} />
      </div>

      <p>
        <span>Selected Date: </span>{' '}
        {date.toLocaleDateString()}
      </p>
      <div className='calendar-todo'>
        {toDo.items.map((item) => (
          item.date == date.toLocaleDateString() ? item.status ? <div key={item.id}>
            <p className='calendar-text'>{item.name}</p>
            <button id={item.id} onClick={handleDelete}>Delete</button>
          </div> : '' : ''
        ))}
        <div className='calendar-add'>
          <input className='calendar-input' value={value} onChange={handleChange}></input>
          <button className='calendar-button' onClick={handleAdd}>Add</button>
        </div>
      </div>
    </div>
  
  )
}

export default ToDoCalendar
