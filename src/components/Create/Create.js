import React,{useState,useRef} from 'react';
import {useHistory } from 'react-router-dom'
import './Create.scss';
const Create = (props) => {
    const {setNoteList,noteList} = props;
    const history = useHistory();
    const button = useRef();
    const dataNode = noteList;
    const [state,setState] = useState( {
        data:{
            completed: "notCompleted",
            noteTitle: "",
            noteText: ""
        },
        colors: {
            border: "#B6D4AC",
            bg: "#D5E8D4"
        },
        submitState:false
    });
    const formSubmitHandler = (e)=>{
        e.preventDefault();
        const sendReq = {...state.data,colors:state.colors}
        try {
            fetch('http://localhost:3003/posts', {
                headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
                method: 'POST', body: JSON.stringify(sendReq)
            }).then(r => r.json())
                .then(respond => {
                    if (Object.keys(respond).length>0){
                        dataNode.push(respond);
                        setNoteList(dataNode);
                        history.push('/');
                    }
                    else{history.push('/error')}
                });
        }catch (e) { console.log(e)}
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
    }
    return (
        <div className={'container'}>
            <h1>Fill Datsa</h1>
            <form onSubmit={formSubmitHandler} onChange={formChangeHandle} className={'crate-form'}>
                <div className={"form-control"}>
                    <input name={"noteTitle"} type="text"   placeholder="Note Title"/>
                </div>
                <div className="form-control">
                    <textarea name={"noteText"} cols="30" rows="10" placeholder="Note Text"/>
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
                    <input disabled={!state.submitState} type="submit" value={'Create'}/>
                </div>
            </form>
        </div>
    );
};

export default Create;