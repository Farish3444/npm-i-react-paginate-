import React,{useState,useEffect} from 'react';
// import {BrowseRouter,Route,Link,NavLink,useHistory} from 'react-router-dom';
import Hooks from './Components/Hooks';
import axios from 'axios';
import './App.css';
import TextField from '@material-ui/core/TextField';

const Home=()=> {
const [log,setLog] = useState([]);
const [input, setInput] = useState('');
const [output, setOutput] = useState([]);



useEffect(()=>{
    const getData=async()=>{
                const data = await axios(`https://jsonplaceholder.typicode.com/users`);
                setLog(data.data)
                console.log(data.data);
            }
            getData();
},[])

useEffect(()=>{
 setOutput([])
 log.filter(val =>{
     if (val.name.toLowerCase().includes(input.toLowerCase())){
         setOutput(output=>[...output,val])
     }
 })
},[input])

    return (
        <div>
            <h2>Home page of Faaris_Coin</h2>
            <p>Click here and Be a member</p>
            <h3>No of members available in the community {log.length}</h3>
            <h4>Search for members</h4>
            <br/>
            <TextField
            type='text'
            variant='outlined'
            style={{width:'20%'}}
            label='search here'
            onChange={(event) => setInput(event.target.value)}
            />
            {output.map((m,key) => (
                <p key={key}>{m.id}.{m.name}</p>
            ))
        }
        </div>
    )
 }


export default Home