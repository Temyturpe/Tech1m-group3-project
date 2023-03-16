import React from 'react'
import Chartbox from '../components/Chartbox'
import Homewelcome from '../components/Homewelcome'
import Incoming from '../components/Incoming'
import Progress from '../components/Progress'
import Total from '../components/Total'
import Calendardate from '../components/Calenderdate'

const Home = () => {
  return (
    <div className='w-full pb-6 pt-16 sm:pt-28'>
        <div className="content w-full flex">
            <div className="left w-0 sm:w-[20%]"></div>
            <div className="right w-full sm:w-[80%]">
              <Homewelcome/>
              <div className="rows grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full px-9 mt-10">
                <Progress/>
                <Total/>
                <Incoming/>
              </div>
              <div className="mt-10 sm:flex w-full px-10 gap-14 overflow-hidden">
                <div className="chart w-full sm:w-[50%] md:w-[66.6%]">
                  <Chartbox/>
                </div>
                <div className="calender w-full sm:w-[50%] md:w-[33.4%] mt-10 sm:mt-0">
                <Calendardate/>
                </div>
                
               
              </div>
            </div>
        </div>
    </div>
  )
}

export default Home