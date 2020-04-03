import React, {Component} from 'react';
import "./NoteCard.scss";

class NoteCard extends Component {
    render() {
       const note=this.props;
        console.log(note);
        return (

                <div className="note-card-container">
                    <div/* style={{backgroundColor: this.props.colors.border}}*/ className="note-card-title">
                        {note.noteTitle}

                    </div>
                    <div className="note-card-content">
                        {note.noteText}
                    </div>
            </div>
        );
    }
}

export default NoteCard;