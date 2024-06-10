import React, { useState } from 'react';
 import noteContext from './noteContext';

const NoteState = (props) => {

  const notesInitial = [
   
      {
        "_id": "66656ae1a61da0b739674726",
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
        "_id": "66656ae1a61da0b739674726",
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
        "_id": "66656b93a61da0b73967472b",
        "user": "66655cd8b8b4efd3c9541448",
        "title": "A second day",
        "description": "a second day in my live is good",
        "tag": "public",
        "date": "2024-06-09T08:45:07.145Z",
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
      }

    ]
 
   
  const [notes, setNotes] = useState(notesInitial)
  return (
    <noteContext.Provider value={{notes, setNotes}}>
      {props.children}
    </noteContext.Provider>
  )
}

export default NoteState
