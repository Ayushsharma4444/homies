import React from 'react'

const Dropdown = () => {
  return (
    <><br/><br/>
    <div className='dropdown_container '>
        <select className='text-center'>
            <option>Choose Area</option>
            <option>toronto </option>
            <option> Mississauga</option>
            <option>Brampton</option>
            <option>Hamilton</option>
            <option>Oshawa</option>
        </select>
        <select className='text-center'>
            <option> Services</option>
            <option>Buyer Or Pre-purchase Inspection </option>
            <option>Peace Of Mind Or Maintainance Inspection</option>
            <option>New Home Pre Delivery Inspection</option>
            <option>New Home Post Delivery Inspection: First And Second Year </option>
            <option>Aerial Roof Inspection With Drone</option>
        </select>
        <select className='text-center' >
            <option> Property Type</option>
            <option>Deteched House</option>
            <option>Semi-Detached or End Unit Townhouse</option>
            <option>Mid Unit TownHouse</option>
            <option>High/Low-Rise Condominium</option>
            <option>Residental Pool & SPA Inspection (with/without Home Inspection) </option>
            <option>Walk-through 1 hr inspection (without report)</option>
            <option>Commercial</option>
        </select>
        <select className='text-center'>
            <option> Request Inspection</option>
            <option>Commercial </option>
            <option> High/Low-Rise Condominium</option>
            <option>Mid Unit TownHouse</option>
        </select>

    </div>
    </>
  )
}

export default Dropdown