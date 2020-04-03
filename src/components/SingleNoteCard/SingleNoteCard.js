import React from 'react';
import {useParams } from 'react-router-dom';
const SingleNote = ({setNoteList,noteList}) => {
    let dataFilter = '';
    console.log(noteList);
    const {id} = useParams();
    if (noteList.length > 0 ){
        dataFilter = noteList.filter(item=>item.id===id);
    }
    console.log(dataFilter[0]);
    return (
        <div>
            dasdasd
        </div>
    );
};
export default SingleNote;