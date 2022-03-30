import { Paper } from "@material-ui/core"
import React,{ useEffect, useState} from "react"

export default function User() {

const[id, setId]=React.useState('')
const[userName, setUserName]=React.useState('')
const[password, setPassword]=React.useState('')
const[roles, setRoles]=React.useState('')
const[users, setUsers]=React.useState([])
const user = {id, userName, password, roles, }

useEffect(()=>{
    fetch("http://localhost:8080/user/getAll")
    .then(res=>res.json())
    .then((result)=>{
      setUsers(result);
    }
  )
  },[])

  return (

    <Paper>
      {users.map(user=>(
        <Paper>
          Id:{user.id}<br/>
          Name:{user.userName}<br/>
          Password:{user.password}<br/>
          Role:{user.roles}
        </Paper>
      ))
      }
    </Paper>
  );
}