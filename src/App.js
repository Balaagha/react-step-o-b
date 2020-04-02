import React,{useEffect,useState} from 'react';
import Navbar from "./components/Navbar/Navbar";
import PageRouter  from "./components/PageRouter";
const App = () => {
    const [noteList,setNoteList] = useState('');
    useEffect( ()=>{
        fetch('http://localhost:3003/posts').then(r => r.json())
            .then((data) => {  setNoteList(data);});
    }, []);
    console.log('app.js de');
    return (
        <>
            <Navbar/>
            <PageRouter setNoteList={setNoteList} noteList={noteList} />
        </>
    );
};
export default App;
