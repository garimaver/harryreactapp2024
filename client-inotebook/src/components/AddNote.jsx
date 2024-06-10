import React , {useContext, useState} from 'react'
import noteContext from '../context/notes/noteContext'

const AddNote = () => {
     const context = useContext(noteContext);
     const {addNote} = context;
     const [note, setNote] = useState({title:"", description:"", tag:""})
const handleClick = () => {
addNote(note)
}

const handleOnChange = (e) => {
   setNote({...note, [e.target.name] : e.target.value})
}
  return (
    <div className='container my-3'>
    <h2>Add a note</h2>
    <form className='my-3'>
<div className="mb-3">
  <label htmlFor="title" className="form-group">Title</label>
  <input type="text" className="form-control" id="title" name='title' aria-describedby="emailHelp" onChange={handleOnChange} placeholder="Enter email"/>
</div>
<div className="form-group">
  <label htmlFor="description">Description</label>
  <input type="text" className="form-control" id="desc" name="description" placeholder="Password" onChange={handleOnChange}/>
</div>
<div className="form-check">
  <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={handleOnChange}/>
  <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
</div>
<button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
</form>

</div>
  )
}

export default AddNote