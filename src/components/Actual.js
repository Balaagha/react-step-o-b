import React from 'react';
import './Preloader/Preloader'
import Preloader from "./Preloader/Preloader";
import NoteList from "./NoteList/NoteList";

const Actual = ({setNoteList,noteList}) => {
    console.log("actualda",noteList.length);
    let dataFilter = [];
    if (noteList.length > 0 ){
         dataFilter = noteList.filter(item=>item.completed==="notCompleted");
    }
    return (
        <>
            {noteList.length > 0 ? <NoteList data={dataFilter} noteList={noteList} setNoteList={setNoteList}  /> : <Preloader/> }
        </>
    );
};

export default Actual;