import React, { useState } from 'react'

function App() {

  const [value, setValue] = useState('')
  const [todo, setTodo]= useState([]);

 

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
    const newTodo= [...todo].filter((items)=>{
      items.name !== index;     
    })
    setTodo(newTodo)
   }
  return (
   <div>
     <div className='flex-wrap  text-center w-auto border-4 border-red-400 ' >
      
      <div className='text-2xl' > This is TODO App !!</div>
      <div className='border-2 p-4' >
      <label htmlFor="">Name: </label>
      <input className='border-2 p-4 border-blue-600' type="text" onChange={(e)=>setValue(e.target.value)} placeholder='What is in your mind!!' />
      
      </div>
      <div className='border-2 px-2 border-slate-500 rounded hover:border-blue-500 bg-slate-500 hover:bg-blue-600' ><button type='submit' onClick={CreateItem}   > CreateItem!!</button></div>
    
     </div>
     <div className='' >
       {todo.map((item, index)=>{
         return <li key={item.id}> {item.name}  
         <button className='border-2 px-2 m-2 border-slate-500 rounded hover:border-blue-500 bg-slate-500 hover:bg-blue-600' type='submit' onClick={()=>DeleteItem(item.id)}   > DeleteItem!!</button>
         <button className='border-2 px-2 border-slate-500 rounded hover:border-blue-500 bg-slate-500 hover:bg-blue-600' type='submit' onClick={()=>DeleteItem(item.id)}   > EditItem!!</button></li> 
       })} 
      </div>
   </div>
  )
}

export default App