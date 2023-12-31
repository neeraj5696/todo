import React, { useState } from 'react'
import './App.css'

function App() {

  const [value, setValue] = useState('')
  const [todo, setTodo]= useState([]);
  const [todoEditing, setTodoEditing]= useState(null);
  const [editingText, setEditingText]= useState("")

 

   const CreateItem = (e)=>{
       e.preventDefault();

    let obj= {
      id: new Date().getTime(),
      name: value  
    }

     setTodo([...todo, obj]) 
     setValue("")
   }

   const  DeleteItem= (index)=>{
    const newTodo= [...todo].filter((items)=>items.id !== index);
      setTodo(newTodo)

   }

   const editTodo = (index)=>{
    const updatedTodo= [...todo].map((item)=>{
      if(item.id === index){
        item.name= editingText
      }
      return item
    });
    setTodo(updatedTodo)
    setTodoEditing(null);
    setEditingText("")
   }
  return (
   <div className='hello' >
     <div className='outerbox' >
      
      <div className=' m-2 p-1 text-center border-2 bg-green-600 border-slate-500 rounded-md  text-white' > This is TODO App !!</div>
      <div className=' ' >
     <div className='border-2 border-blue-400 rounded-md m-2 p-1 bg-white'>
       <label className='' htmlFor="">Name: </label>
       <input className='' type="text" onChange={(e)=>setValue(e.target.value)} placeholder='What is in your mind!!' />
     </div>
      
      </div>
      <div className='border-2 border-blue-400 rounded-md bg-white m-2 p-1 hover:bg-blue-600 hover:text-white' ><button type='submit' onClick={CreateItem}   > Create</button></div>
    
     </div>
     <div className='block' >
       {todo.map((item, index)=>{
         return <li className='' key={item.id}>
          {todoEditing === item.id ? (<input type='text' className='btn' onChange={(e)=>{setEditingText(e.target.value)}}/>):(<div className='btn'>:{item.name}</div>)}
          {todoEditing === item.id ? ( <button className='btn' onClick={()=>editTodo(item.id)} >Submit Edit</button>):( <button className='btn' type='submit' onClick={()=>setTodoEditing(item.id)}   > Edit</button>)}
             
         <button className='btn' type='submit' onClick={()=>DeleteItem(item.id)}   > Delete</button>
        
        
         </li> 
       })} 
      </div>
   </div>
  )
}

export default App