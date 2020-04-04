import React, {Component} from 'react';
import NoteCard from "../NoteCard/NoteCard";


class NoteList extends Component {
    render() {
       const notes=this.props.data;
       const cards=notes.map((note, index)=>{
        return (
            <NoteCard
                key={index}
                completed={note.completed}
                noteColor={note.colors}
                noteTitle={note.noteTitle}
                noteText={note.noteText}
                noteId={note.id}
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