import React, {Component} from 'react';
import "./NoteCard.scss";
import {Redirect} from "react-router";
class NoteCard extends Component {
    state = {
        redirect: false
    };
    setRedirect = () => {
        this.setState({
            redirect: true
        })
    };
    renderRedirect = () => {
        console.log(this.props);
        if (this.state.redirect) {
            return <Redirect to={`/notes/${this.props.noteId}`} />
        }
    };
    render() {
        const note=this.props;
        return (
            <div onClick={this.setRedirect}  style={{backgroundColor: note.noteColor.bg}} className="note-card-container">
                {this.renderRedirect()}
                <div style={{backgroundColor: note.noteColor.border}} className="note-card-title">
                    {note.noteTitle}
                </div>
                <div  className="note-card-content">
                    {note.noteText}
                </div>
            </div>
        );
    }
}
export default NoteCard;