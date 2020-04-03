import React from 'react';
import axios from 'axios';
const Create = ({setNoteList,noteList}) => {
    const dataNode = noteList;
    const data = {
        completed: "notCompleted",
        noteTitle: "New",
        noteText: "lorem dasd lore asd ",
        colors: {
            border: "#B6D4AC",
            bg: "#D5E8D4"
        }
    };
    const addNotes = async ()=>{
        const respond = await axios.post('http://localhost:3003/posts',data);
        console.log("create de log",respond.data);
        dataNode.push(respond.data);
        console.log("create de log",dataNode);
        setNoteList(dataNode);
    };
    return (
        <>
            <button onClick={addNotes}>Add</button>
        </>
    );
};

export default Create;