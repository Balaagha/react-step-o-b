import React, {useState, useRef, useEffect} from 'react';
import {useHistory,useParams } from 'react-router-dom';
import Preloader from "../Preloader/Preloader";
import './Create.scss';
const Edit = ({setNoteList,noteList} ) => {
    const history = useHistory(),button = useRef(),{id} = useParams();
    let dataFilter=[],dataNode = noteList;
    const [state,setState] = useState( false);
    useEffect(()=>{
        if (noteList.length > 0 ){
            dataFilter = noteList.filter(item=>item.id===id)[0];
            setState({
                data:{ completed: "notCompleted", noteTitle: dataFilter.noteTitle, noteText: dataFilter.noteText,id:dataFilter.id },
                colors: {  border: dataFilter.colors.border, bg: dataFilter.colors.bg  },
                submitState:false
            });
        }
    },[noteList]);
    const formSaveHandler = (e)=>{
        e.preventDefault();
        const sendReq = {...state.data,colors:state.colors}
        console.log("send req",sendReq);
        fetch(`http://localhost:3003/posts/${state.data.id}`, {
            headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
            method: 'PATCH', body: JSON.stringify(sendReq)
        }).then(r => r.json())
            .then(respond => {
                if (Object.keys(respond).length>0){
                    dataNode=dataNode.filter(item=>item.id!==state.data.id);
                    dataNode.push(respond);
                    setNoteList(dataNode);
                    history.push(`/notes/${state.data.id}`);
                }
                else{history.push('/error')}
            });
    }
    const colorsClickHandler=(e)=>{
        e.preventDefault();
        for(let i of button.current.children){  i.classList.remove("active");  }
        e.target.classList.add('active');
        setState({ ...state,
            colors: {border: e.target.getAttribute('data-border'),bg: e.target.getAttribute('data-bg')}
        });
    }
    const formChangeHandle =(e)=>{
        const data = { ...state.data, [e.target.name]: e.target.value};
        if (Object.keys(data).every(k => data[k].length > 0)){
            setState({ ...state,data:{...data},submitState:true });
        } else{
            setState({ ...state,data:{...data},submitState:false });
        }
        console.log(state);
    }
    if (state){
        return (
            <div className={'container'}>
                <h1>Edit Data</h1>
                <form onSubmit={formSaveHandler} onChange={formChangeHandle} className={'crate-form'}>
                    <div className={"form-control"}>
                        <input defaultValue={state.data.noteTitle} name={"noteTitle"} type="text"   placeholder="Note Title"/>
                    </div>
                    <div className="form-control">
                        <textarea defaultValue={state.data.noteText} name={"noteText"} cols="30" rows="10" placeholder="Note Text"/>
                    </div>
                    <div className={'colors-wrapper'}>
                        <span>Colors : </span>
                        <div className={'button-wrapper'} ref={button}>
                            <button data-border={'#B6D4AC'} data-bg={'#D5E8D4'} onClick={colorsClickHandler} className={'green btn'}/>
                            <button data-border={'#A3B9D8'} data-bg={'#DAE8FC'} onClick={colorsClickHandler} className={'blue btn'}/>
                            <button data-border={'#EDD899'} data-bg={'#FFF2CC'} onClick={colorsClickHandler} className={'yellow btn'}/>
                            <button data-border={'#B85450'} data-bg={'#F8CECC'} onClick={colorsClickHandler} className={'red btn'}/>
                        </div>
                    </div>
                    <div className="form-control">
                        <input disabled={!state.submitState} type="submit" value={'Save'}/>
                    </div>
                </form>
            </div>
        );
    }else{return (<Preloader/>)}
};

export default Edit;