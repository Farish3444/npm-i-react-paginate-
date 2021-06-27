import React,{useState} from 'react';

function PracticeField() {

    const [fill, setfill] = useState({username:""})
    const [valid, setvalid] = useState(false);
    const [submit, setsubmit] = useState(false);


    const handleChange=(e)=>{
        setfill({...fill,username:e.target.value})
    }

    const dataSubmission=(e)=>{
        e.preventDefault();
        if(fill.username){
            setvalid(true)
            console.log(fill)
        }
        setsubmit(true);
    }


    return (
        <div style={{marginTop:'20%'}}>
        <form onSubmit={dataSubmission}>
        <input 
        type='text'
        placeholder="practice area"
        value={fill.username}
        onChange={handleChange}
        />
        {!fill.username && submit ? 'please enter value':null}
        <button>submit</button>
        {fill.username && valid ? <p style={{marginTop:'-4%'}}>'Thankyou Perfect Form'</p>:null}
        </form>
        </div>
    )
}

export default PracticeField;
