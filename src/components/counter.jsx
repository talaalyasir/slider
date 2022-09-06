import React from 'react'

import { useState } from 'react'
import CountUp from 'react-countup'
import Scrolltrigger from 'react-scroll-trigger'

export default function Counter(props) {
    const [counteron, setcounteron] = useState(false)

    return (
        <div className='text-center space-y-5 p-10'>
            <Scrolltrigger onenter={() => setcounteron(true)} onEnter={() => setcounteron(true)} onExit={() => setcounteron(false)} >
                {
                    counteron && <h1 className='text-blue-600 text-5xl'><CountUp start={0} end={props.head.h1} suffix={props.head.plus} duration={1}/></h1>
                }
            </Scrolltrigger>
            <p className='text-xl'>{props.head.ptxt}</p>
        </div>
    )
}