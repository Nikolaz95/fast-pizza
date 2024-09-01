import React from 'react'
import { useSelector } from 'react-redux'

const UserName = () => {
    const userName = useSelector(state => state.user.username);

    if (!userName) return null;
    return (
        <div className="hidden text-sm font-semibold md:block">
            <p className='text-sm font-semibold '> {userName} </p>
        </div>
    )
}

export default UserName
