import React,{useState} from 'react'


const NavBar = (props) => {

const [form,setForm] = useState({username:'',password:''})

const dataLog=(e)=>{
    e.preventDefault();
    console.log(form);
}

    return (
        <div>
        <h3>{props.name} {props.number} {props.functions}</h3>
            <ul style={{ padding:'10px',display:'inline-block',justifyContent:'space-around'}}>
            <li>nav1</li>
             <li>nav2</li>
              <li>nav3</li>
            </ul>

            <form onSubmit={dataLog}>
            <input
            type='text'
            placeholder='username'
            onChange={e => setForm(e.target.value)}
            />
            <input
            type='password'
            placeholder='password'
            onChange={e => setForm(e.target.value)}
            />
            <button>submit</button>
            </form>
        </div>
    )
}

export default NavBar