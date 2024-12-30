"use client"

import axios from "axios";

export default function signin(){
    return (
        <div className="text-lg  w-screen h-screen flex items-center justify-center">
            <div>
                <h1>Sign in to Todo Application</h1>
                  <form >
                  <input type="text" placeholder="Username" className="border m-2" />
                    <input type="password" placeholder="Password" className="border m-2" />
                    <button type="submit" className="border m-2" onClick={()=> {axios.post("http:/localhost:3000/api/v1/signin")}}>Sign in</button>
                
                  </form>
                    
            </div>
        </div>
    );
}