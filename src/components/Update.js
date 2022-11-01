import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const storedUser = useLoaderData();
    const [users, setUsers] = useState(storedUser)
    const handleUpdateUser = event => {
        event.preventDefault();
        fetch(`http://localhost:5000/users/${storedUser._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(users),
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert("User Updated!");
                    console.log(data);
                }
            })

    }
    const handleInputChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newUsers = { ...users };
        newUsers[field] = value;
        setUsers(newUsers)
    }
    return (
        <div>
            <h2>Update: {storedUser.name}</h2>
            <form onSubmit={handleUpdateUser}>
                <input onChange={handleInputChange} defaultValue={users.name} type="text" name='name' placeholder='name' required />
                <br />
                <input onChange={handleInputChange} defaultValue={users.address} type="text" name='address' placeholder='address' required />
                <br />
                <input onChange={handleInputChange} defaultValue={users.email} type="email" name="email" id="" placeholder='email' required />
                <br />
                <input type="submit" value="Update User" />
            </form>
        </div>
    );
};

export default Update;