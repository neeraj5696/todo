import React, { useState } from 'react'

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
   <div>
     <div className='border-2 w-88 rounded-md border-neutral-800 w-[24rem] m-2 p-4' >
      
      <div className='text-2xl bg-slate-600 rounded-md  text-white  m-2 p-1/2   text-center' > This is TODO App !!</div>
      <div className='border-2 rounded-md m-2 ' >
     <div className='flex'>
     <label className='m-2 px-4 border-2 rounded-md' htmlFor="">Name: </label>
      <input className='border-2 m-2 px-4 rounded-md border-blue-600' type="text" onChange={(e)=>setValue(e.target.value)} placeholder='What is in your mind!!' />
     </div>
      
      </div>
      <div className='border-2 m-2 px-2  border-slate-500 rounded-md text-center hover:border-blue-500 bg-slate-500 hover:bg-blue-600' ><button type='submit' onClick={CreateItem}   > CreateItem!!</button></div>
    
     </div>
     <div className='inline-block' >
       {todo.map((item, index)=>{
         return<ul> <li className='' key={item.id}>
          {todoEditing === item.id ? (<input type='text' className='border-2 px-2 m-2 rounded-md ' onChange={(e)=>{setEditingText(e.target.value)}}/>):(<div className='border-2 px-2 m-2 rounded-md'>{item.name} :</div>)}
          {todoEditing === item.id ? ( <button className='border-2 px-2 m-2 rounded-md' onClick={()=>editTodo(item.id)} >Submit Edit</button>):( <button className='border-2 px-2 m-2 border-slate-500 rounded hover:border-blue-500 bg-slate-500 hover:bg-blue-600' type='submit' onClick={()=>setTodoEditing(item.id)}   > Edit</button>)}
             
         <button className='border-2 px-2 m-2 border-slate-500 rounded hover:border-blue-500 bg-slate-500 hover:bg-blue-600' type='submit' onClick={()=>DeleteItem(item.id)}   > Delete</button>
        
        
         </li> </ul>
       })} 
      </div>
   </div>
  )
}

export default App