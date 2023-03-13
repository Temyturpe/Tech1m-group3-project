import React from 'react'
import Chartbox from '../components/Chartbox'
import Homewelcome from '../components/Homewelcome'
import Incoming from '../components/Incoming'
import Progress from '../components/Progress'
import Total from '../components/Total'
import Calendardate from '../components/Calenderdate'

const Home = () => {
  return (
    <div className='w-full pb-6 pt-28'>
        <div className="content w-full flex">
            <div className="left w-[20%]"></div>
            <div className="right w-[80%]">
              <Homewelcome/>
              <div className="rows flex gap-10 w-full px-9 mt-10">
                <Progress/>
                <Total/>
                <Incoming/>
              </div>
              <div className="mt-10 flex w-full px-10 gap-14 overflow-hidden">
                <div className="chart w-[66.6%]">
                  <Chartbox/>
                </div>
                <div className="calender w-[33.4%]">
                <Calendardate/>
                </div>
                
               
              </div>
            </div>
        </div>
    </div>
  )
}

export default Home