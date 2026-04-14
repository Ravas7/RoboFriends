import React from 'react'

const Card = ({name, email, id, customImage}) =>{
    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={customImage || `https://robohash.org/${id}?200x200`}
            style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;