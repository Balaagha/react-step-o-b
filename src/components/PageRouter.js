import React from 'react';
import {Route,Switch} from 'react-router-dom'
import Create from "./Create/Create";
import Actual from "./Actual";
import Archive from "./Archive";
const PageRouter = ({setNoteList,noteList}) => {
    return (
        <>
            <Switch>
                <Route path={"/"} exact><Actual setNoteList={setNoteList} noteList={noteList} /></Route>
                <Route path={"/archive"} ><Archive setNoteList={setNoteList} noteList={noteList} /></Route>
                <Route path={"/create"} ><Create setNoteList={setNoteList} noteList={noteList} /></Route>
                <Route path={"/notes/:id"} >notes</Route>
            </Switch>
        </>
    );
};

export default PageRouter;