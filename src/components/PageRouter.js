import React from 'react';
import {Route,Switch,Link} from 'react-router-dom'
import Create from "./Create/Create";
import Edit from "./Create/Edit"
import Actual from "./Actual";
import Archive from "./Archive";
import SingleNoteCard from "./SingleNoteCard/SingleNoteCard";
const PageRouter = ({setNoteList,noteList}) => {
    const errorLoader =()=>{
        return(
            <div className={"error-container"}>
                <h1 className={"error-h1"} >Something gone wrong</h1>
                <Link to={'/'}>Bact To Home</Link>
            </div>
        )
    }
    return (
        <>
            <Switch>
                <Route path={"/"} exact><Actual setNoteList={setNoteList} noteList={noteList} /></Route>
                <Route path={"/archive"} ><Archive setNoteList={setNoteList} noteList={noteList} /></Route>
                <Route path={"/create"} ><Create setNoteList={setNoteList} noteList={noteList} /></Route>
                <Route path={"/notes/:id"} ><SingleNoteCard setNoteList={setNoteList} noteList={noteList} /></Route>
                <Route path={"/edit/:id"} ><Edit setNoteList={setNoteList} noteList={noteList} /></Route>
                <Route path={"*"} exac render={errorLoader} />

            </Switch>
        </>
    );
};

export default PageRouter;