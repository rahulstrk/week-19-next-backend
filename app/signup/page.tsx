"use client"
import axios from "axios"
import React, { useState ,useRef} from "react"
export default function signup(){
    const nameRef=useRef<HTMLInputElement>(null);
    const passwordRef=useRef<HTMLInputElement>(null);

    const handleSubmit=(e:any)=>{
        e.preventDefault();
        console.log('Name:',nameRef.current?.value);
        console.log('Password:',passwordRef.current?.value);
        axios.post("http://localhost:3000/api/v1/signup",{
            username:nameRef.current?.value,
            password:passwordRef.current?.value
        })
    }

    return <div className="h-screen w-screen flex  justify-center items-center">
        <div>
            <h1>Sign up</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" ref ={nameRef} placeholder="username" className="border m-2"/>
                <input type="password" ref={passwordRef} placeholder="password" className="border m-2" />
                <button type="submit" className="text-lg border m-2 " >Sign up</button>
            </form>

        </div>
    </div>
}