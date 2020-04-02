import React from 'react';
import './Preloader/Preloader'
import Preloader from "./Preloader/Preloader";

const Archive = ({setNoteList,noteList}) => {
    console.log("Archivede",noteList.length);
    let dataFilter = [];
    if (noteList.length > 0 ){
        dataFilter = noteList.filter(item=>item.completed!=="notCompleted");
    }
    return (
        <>
            {noteList.length > 0 ? "NoteList" : <Preloader/> }
        </>
    );
};

export default Archive;