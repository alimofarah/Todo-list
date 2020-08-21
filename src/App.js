import React ,{useState} from 'react';

const Todo =()=>{
    const[list,setlist]=useState([{task:'workout',id:'workout'}])
    const[input,setinput]=useState('')


const Change=(e,list,setlist,input,setinput)=>{
  e.preventDefault()
  setlist([...list,{task:input,id:input}])
  setinput("") 
}

return(
  <React.Fragment>
    <h2 className="text-center text-primary font-size15">Todo List</h2>
      <div className="container">
    
        <form className="form-inline" onSubmit={(e)=>{Change(e,list,setlist,input,setinput)}}>
        <div className="col-auto">
            <input className="form-control" placeholder="input your task" onChange={(e)=>setinput(e.target.value)} value={input} />
        </div>   
            <div className="col-auto">
            <button className="btn btn-primary my-1">Add</button>
            </div>
        </form>
    
    

<div className="container">
  <ul className="list-group">
    {list.map(e=>(
    <li key={e.id} className="list-group-item">
      <div className="container">{e.task}
      <button className="btn btn-outline-primary my-1 ml-2 float-right" onClick={()=>setlist(list.filter(m=>m.id!==e.task))}>delete</button>
      </div>
      </li>
 ))}
 </ul>
 </div>
 </div>
 </React.Fragment>
)}
export default Todo;
