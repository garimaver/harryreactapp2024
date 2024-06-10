import React, { useState } from 'react';
 import noteContext from './noteContext';

const NoteState = (props) => {

  const notesInitial = [
   
      {
        "_id": "66656ae1a61da0b73967472612",
        "user": "66655cd8b8b4efd3c9541448",
        "title": "A day",
        "description": "a day in my live if good",
        "tag": "personal",
        "date": "2024-06-09T08:42:09.706Z",
        "__v": 0
      },
      {
        "_id": "66656b93a61da0b73967472b",
        "user": "66655cd8b8b4efd3c9541448",
        "title": "A second day",
        "description": "a second day in my live is good",
        "tag": "public",
        "date": "2024-06-09T08:45:07.145Z",
        "__v": 0
      },
      {
        "_id": "66656ae1a61da0b73967472615",
        "user": "66655cd8b8b4efd3c9541448",
        "title": "A day",
        "description": "a day in my live if good",
        "tag": "personal",
        "date": "2024-06-09T08:42:09.706Z",
        "__v": 0
      },
      {
        "_id": "66656b9563a61da0b73967472b",
        "user": "66655cd8b8b4efd3c9541448",
        "title": "A second day",
        "description": "a second day in my live is good",
        "tag": "public",
        "date": "2024-06-09T08:45:07.145Z",
        "__v": 0
      },
      {
        "_id": "66656b93a61dea0b73967472b",
        "user": "66655cd8b8b4efd3c9541448",
        "title": "A second day",
        "description": "a second day in my live is good",
        "tag": "public",
        "date": "2024-06-09T08:45:07.145Z",
        "__v": 0
      },
      {
        "_id": "66656b93a61eda0b73967472b",
        "user": "66655cd8b8b4efd3c9541448",
        "title": "A second day",
        "description": "a second day in my live is good",
        "tag": "public",
        "date": "2024-06-09T08:45:07.145Z",
        "__v": 0
      }

    ]
 
   
  const [notes, setNotes] = useState(notesInitial);

  //Add a note
  const addNote = (title, description,tag) => {
// todo api call
console.log("adding a new note")
const note = {
  "_id": "66656ae1a61da0b73967472615",
  "user": "66655cd8b8b4efd3c95414748",
  "title": title,
  "description": description,
  "tag": tag,
  "date": "2024-06-09T08:42:09.706Z",
  "__v": 0
};
setNotes(notes.concat(note))
  }
    //delete a note
    const deleteNote = (id) => {
     console.log("Deleting the note with id" + id);
    const newNotes = notes.filter((note) => {return note._id !== id})
     setNotes(newNotes)
    }
      //edit a note
  const editNote = (id, title, description, tag) => {
    
  }
  return (
    <noteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
      {props.children}
    </noteContext.Provider>
  )
}

export default NoteState
