import React from 'react'
import { NavLink } from 'react-router-dom';

const HomeProfile = () => {
    const users = [

        { id: 'Anu-profile', name: 'Anu' },
        { id: 'Seema-profile', name: 'Seema' },
        { id: 'Deepika-profile', name: 'Deepika' },
    ];

    return (

        <div className="pt-10 text-center">
            <h1 className="text-3xl font-bold mb-6 text-center">Params</h1>
            <p>Select a user to view their profile:</p>
            <ul className="list-none mt-4 text-center">
                {users.map((user) => (
                    <li key={user.id} className="mb-2">
                        <NavLink
                            to={`/user/${user.id}`}
                            className="text-blue-600 hover:underline"
                        >
                            {user.name}'s Profile
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div >

    )
}

export default HomeProfile