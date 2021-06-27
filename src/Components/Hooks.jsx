import React,{useState} from 'react';

function Hooks() {
    const [data, setdata] = useState({
        username:"",
        email:""
    })
 
    const [validate, setvalidate] = useState(false);
    const [submission, setsubmission] = useState(false);

    const handleUsername=(e)=>{
        setdata({...data,username:e.target.value})
    }

    const handleEmail=(e)=>{
        setdata({...data,email:e.target.value})
    }

    const submitChange=(e)=>{
        e.preventDefault();
        if(data.email && data.username){
            setvalidate(true)
            console.log(data);
            setsubmission(true)
        }
    }

    return (
        <div className='App'>
            <form onSubmit={submitChange}>
            <input
            style={{borderRadius:'10%'}}
            type='text'
            placeholder='username'
            onChange={handleUsername}
            value={data.username}
            />
            {!data.username && submission ? <p style={{color:'red'}}>enter username</p>:null}
            <br/>
            <input
            type='password'
            placeholder="email"
            onChange={handleEmail}
            value={data.email}
            />
            {!data.email && submission ? <p style={{color:'red'}}>Enter Valid email</p>:null}

            <button onClick={data.username && data.email && submission ? <p style={{color:'green'}}>Successful Form</p>:null}>Submit</button>
            </form>
        </div>
    )
}

export default Hooks
