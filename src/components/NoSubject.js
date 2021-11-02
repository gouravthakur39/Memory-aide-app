import React from 'react'
import './NoSubject.css'

const NoSubject = (props) => {
    return (
        <div className="empty mt-5">
           <img className="empty-img" alt="Tag" src="/assets/empty.png"/>
            <p className="empty-text mt-1">Wow, much empty!</p>
        </div>
    )
}

export default NoSubject
