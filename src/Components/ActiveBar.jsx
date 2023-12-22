import React from 'react'
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa6";

const ActiveBar = ({populor,popcount , setPopcount}) => {
  return (
        <div className='flex w-1/2 gap-3 mb-5 mt-10 items-center absolute bottom-0 transition-all delay-[3000ms] ease-linear'>
            <button className="prev  border-slate-500 rounded-full p-1 border-solid border-[2px]" onClick={() => setPopcount(prev => prev > 0 ? prev - 1 : 7)
            }> <FaChevronLeft /></button>
            <div className="cent flex gap-1" style={{ transitionDelay: '3000ms' }} >
                {
                    populor.map((item , index) => {
                        return (
                            <div key={index} className={index === popcount ? "active" : "not-active"}>
                                <div className={`w-2 h-2 rounded-full border-[3px] ${index === popcount ? ' px-2  bg-purple border-purple border ' : 'border-slate-500  bg-transparentS' } `}></div>
                            </div>
                        )
                    }
                    )
                }
            </div>
            <button className="nexr border-[2px] border-slate-500 rounded-full p-1 border-solid" onClick={
                () => setPopcount(prev => prev < 7 ? prev + 1 : 0)
            }> < FaChevronRight /></button>
        </div>
  )
}

export default ActiveBar
