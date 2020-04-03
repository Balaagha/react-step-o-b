import React, {Component} from 'react';
import NoteCard from "../NoteCard/NoteCard";


class NoteList extends Component {
    render() {
       const notes=this.props.data;
       const cards=notes.map((note)=>{
        return (
            <NoteCard
                noteColor={note.colors}
                noteTitle={note.noteTitle}
                noteText={note.noteText}
            />
        );
       }
       );
        return (
            <div className="noteList-container">
                {cards}
            </div>
        );
    }
}

export default NoteList;