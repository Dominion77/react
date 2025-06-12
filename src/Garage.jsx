import React from 'react'
function Car({carName}){
    return<li>The name of the car is {carName}</li>
}

const Garage = () => {
    const cars =["BMW", "Lexus", "Toyota", "Benz"]
  return (
    <div>
    <h1>Using list</h1>
    <>
    <h1>My Car Garage</h1>
    <ul style={{backgroundColor: 'lime', padding: '2px', color: 'brown'}}>{cars.map((car, index) => <Car key={index} carName ={car}/>)}
    </ul>
    </>

    </div>
  )
}

export default Garage