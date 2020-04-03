import React, {Component} from 'react';

class NoteCard extends Component {
    render() {
       const note=this.props;
        return (

                <div className="note-card-container">
                    <div className="note-card-title">
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