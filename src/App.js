import React,{useEffect,useState} from 'react';
import axios from "axios";
import Preloader from "./components/Preloader/Preloader";
const App = () => {
    const [noteList,setNoteList] = useState('');
    useEffect( ()=>{
        fetch('http://localhost:3003/posts').then(r => r.json())
            .then((data) => {  setNoteList(data);});
    }, []);
    return (
        <>
            {noteList.length > 0 ? "component" : <Preloader/> }
        </>
    );
};

export default App;
