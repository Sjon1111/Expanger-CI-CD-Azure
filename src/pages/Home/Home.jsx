import React from 'react'
import './home.scss'
import Topbox from '../../Componant/Topbox/Topbox'
import Chartbox from '../../Componant/Chartbox/Chartbox'
import Barchart from '../../Componant/Barcharts/Barchart'
import Geography from '../../Componant/Geographychart/Geography'
import Expiechart from '../../Componant/Piechart/Expiechart'
import Turnpiechart from '../../Componant/Piechart/Turnpiechart'
import Growthchart from '../../Componant/Areachart/Growthchart'

export default function Home() {
  return (
    <div className='home'>
      <div className='box box1'><Topbox /></div>
      <div className='box box2'><Chartbox /></div>
      <div className='box box3'><Chartbox /></div>
      <div className='box box4'><Expiechart /> <Turnpiechart /></div>
      <div className='box box5'><Chartbox /></div>
      <div className='box box6'><Chartbox /></div>
      <div className='box box7'><Geography /></div>
      <div className='box box8'><Growthchart /></div>
      <div className='box box9'><Barchart /></div>
    </div>
  )
}
