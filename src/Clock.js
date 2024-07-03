import React, { useEffect, useState } from 'react'
import './clock.css'

const Clock = () => {

    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date())
        }, 1000) 

        return () => clearInterval(timer)
    }, [])

    function format() {
        const hour = time.getHours()
        const minutes = time.getMinutes()
        const seconds = time.getSeconds()

        return `${padZero(hour)}:${padZero(minutes)}:${padZero(seconds)}`
    }

    function padZero(number) {
        return number < 10 ? "0" + number : '' + number
    }

  return (
    <div className='clock-container'>
        <div className='clock'>
            <span>{format()}</span>
        </div>
    </div>
  )
}

export default Clock