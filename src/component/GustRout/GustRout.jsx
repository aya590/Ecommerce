import React,{useContext} from 'react'
import { Navigate } from 'react-router-dom';
import {UserContext} from "../../context/User.context"

export default function GustRout({children}) {

  let {token} =useContext(UserContext)
  if (!token){
    return children;
  }else{
    return<Navigate to ="/Home"/>
  }
}
