import React, { useState } from 'react';

const AddUser = () => {
    const [users, setUsers] = useState({})
    const handleAddUser = event => {
        event.preventDefault();

        fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(users)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert("User add successfully.");
                    event.target.reset();
                }
            })
    }
    const handleOnBlur = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newUsers = { ...users };
        newUsers[field] = value;
        setUsers(newUsers)
    }
    return (
        <div>
            <h2>Please add a user</h2>
            <form onSubmit={handleAddUser}>
                <input onChange={handleOnBlur} type="text" name='name' placeholder='name' required />
                <br />
                <input onChange={handleOnBlur} type="text" name='address' placeholder='address' required />
                <br />
                <input onChange={handleOnBlur} type="email" name="email" id="" placeholder='email' required />
                <br />
                <input type="submit" value="Add User" />
            </form>
        </div>
    );
};

export default AddUser;