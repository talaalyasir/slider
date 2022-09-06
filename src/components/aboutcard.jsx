import React from 'react'

export default function Aboutcard(props) {
    return (
        <div className='flex justify-center flex-col text-center'>

            <div className='flex justify-center text-blue-700 text-4xl'>
                {props.data.icon}
            </div>
            <p className='text-xl'>
                {props.data.ptext}
            </p>
        </div>
    )
}