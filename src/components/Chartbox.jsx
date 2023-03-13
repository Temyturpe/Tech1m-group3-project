import React from 'react'
import {Chart as Chartjs, BarElement, CategoryScale, LinearScale, Tooltip } from 'chart.js'
import Down from '../assets/icons/down.svg'
import { Bar } from 'react-chartjs-2'
Chartjs.register(
  BarElement, 
  CategoryScale, 
  LinearScale, 
  Tooltip
)

const Chartbox = () => {
  const data = {
    labels:['2/01','3/01', '4/01', '5/01', '6/01', '7/01', '8/01'],
    datasets:[
      {
        label: 'Earnings',
        data: [ 180, 490, 390, 570, 300, 590, 520],
        backgroundColor: '#0065FF',
        borderRadius: 20,
        borderWidth: 1,
        barPercentage: 0.5
      }
    ]
  }
  const options = {
    scales: {
      y: {
        beginAtZero: true,
        min: 0,
        max: 600,
          ticks:
            {
            stepSize: 200,
            display: true
          },
          grid: {
            drawTicks: false,
          }
      },
      x: {
        grid: {
          drawOnChartArea: false,
          drawTicks: false
        }
      }
  }
  }
  return (
    <div className='w-full'>
      <div className="toptexts flex justify-between mb-5">
        <div className="title text-lg text-primary-500">Earning</div>
        <div className="last text-primary-100 flex items-center gap-1">Last 7 days <span className="down"><img src={Down} alt="" className='h-[14px] w-[14px]' /></span></div>
      </div>
      <Bar
      data = { data }
      options = { options }>

      </Bar>
    </div>
  )
}

export default Chartbox