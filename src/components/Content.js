import React from 'react'
import FirstFerrari from '../images/ferrari-1.jpg'
import SecondFerrari from '../images/ferrari-2.jpg'

const Content = () => {
    return (
        <div className="flex flex-col justify-center items-center bg-white h-screen font-mono py-40">
            <img src={FirstFerrari} alt="" className="h-full rounded mb-20 shadow"/>
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-2xl mb-2">New Ferrari Van Güzeli</h2>
                <span className="">$766636</span>
            </div>
        </div>
    )
}

export default Content
