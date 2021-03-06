import React, {useRef, useState} from 'react';
import {Link} from "react-router-dom";
import {useParams,useHistory } from 'react-router-dom';
import Preloader from "../Preloader/Preloader";
import "./SingleNoteCard.scss";
const SingleNoteCard = ({setNoteList,noteList}) => {
    const [modalState,setModalState] = useState(false);
    const history = useHistory();
    const archive = useRef();
    let dataFilter = '';
    console.log(noteList);
    const {id} = useParams();
    if (noteList.length > 0 ){
        dataFilter = noteList.filter(item=>item.id===id);
    }
    console.log("data filter",dataFilter[0]);
    if (dataFilter[0]){
        console.log('id',dataFilter[0].id);
        const linkTarget= `/edit/${dataFilter[0].id}`;
        console.log(dataFilter[0].colors);
        const addArchive = () =>{
            console.log("addarchive ishleyir");
            if (dataFilter[0].completed==="notCompleted"){
                fetch(`http://localhost:3003/posts/${dataFilter[0].id}`, {
                    method: "PATCH",
                    body: JSON.stringify({
                        completed: "Completed"
                    }),
                    headers: {
                        "Content-type": "application/json"}
                })
                    .then(response => response.json())
                    .then(respond => {
                        let dataSend = noteList.filter(item=>item.id!==dataFilter[0].id);
                        archive.current.classList.add("active");
                        dataSend.push(respond);
                        setNoteList(dataSend);
                    });
            }
        };
        const deleteNote=()=>{
            fetch(`http://localhost:3003/posts/${dataFilter[0].id}`, {
                method: 'delete'
            })
                .then(response => response.json())
                .then(
                    respond => {
                        let dataSend = noteList.filter(item=>item.id!==dataFilter[0].id);
                        setNoteList(dataSend);
                        history.push('/');
                    }
                );
        };
        const toggleWindow=()=>{
            setModalState(!modalState);
        };
        return (
            <div className="single-note-container">
                <div style={{backgroundColor: dataFilter[0].colors.bg}} className="single-note-item">
                    <div className="header" style={{backgroundColor: dataFilter[0].colors.border}}><p>{dataFilter[0].noteTitle}</p></div>
                    <div className="content" ><p>{dataFilter[0].noteText}</p></div>
                </div>
                <div className="buttons">
                    <div className="edit-btn"><Link to={linkTarget} >Edit</Link></div>
                    {
                        dataFilter[0].completed==="notCompleted" ? <button ref={archive}  className="archive-btn" onClick={addArchive}>Archive</button>
                            : <button ref={archive} className="archive-btn active" onClick={addArchive}>Archive</button>
                    }
                    <div onClick={toggleWindow} className="edit-btn"><a>delete</a></div>
                    {
                        modalState ?
                            <div className="contain">
                            <div className="modal-window">
                                <div>Do you want to delete this note?</div>
                                <button onClick={deleteNote}>delete</button>
                                <button onClick={toggleWindow}>cancel</button>
                            </div>
                            </div>
                            :null
                    }
                </div>
            </div>
        );
    }
    else {return (<Preloader/>)}
};
export default SingleNoteCard;