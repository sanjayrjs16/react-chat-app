import React, {useState} from 'react';
import {Link} from 'react-router-dom';

export default function Join() {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    return (
        <div>
            <h1>Join </h1>
            <input type="text" onChange={(event) => setName(event.target.value) } placeholder={"Enter your name"} />
            <input type="text" onChange={(event) => setRoom(event.target.value) } placeholder={"Enter the room to enter"} />
            <Link to={`/chat?name=${name}&room=${room}`}    onClick={(e) => (!name || !room)?e.preventDefault():''} >
                <button type="submit">Sign in</button>
            </Link>
        </div>
    )
}
