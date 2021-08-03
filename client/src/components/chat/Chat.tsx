import React, {useState, useEffect} from 'react'
import queryString from 'query-string';
import io from 'socket.io-client'

export default function Chat({location}: any){
    const [name, setName] = useState<any>('');
    const [room, setRoom] = useState<any>('');
    const ENDPOINT = 'localhost:5000';
     
    useEffect(() => {
        const {name, room} = queryString.parse(location.search)
        
        const socket = io(ENDPOINT)
        setName(name);
        setRoom(room);

    })
    return (
        <div>
            
        </div>
    )
}
