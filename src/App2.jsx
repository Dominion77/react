import React from 'react'
import Footer from './footer'
import ProfileCard from './ProfileCard'
import App3 from './App3'
import FavouriteColor from './ColorChange'
import Garage from './Garage'



const App2 = () => {
  return (
    <div>
        <h1 style={{backgroundColor:'blue', fontStyle:'italic', padding: "20px", fontWeight: "bold"}}>Welcome to React</h1>
        <Footer />
        <ProfileCard name= "Herrschaft" age={38} sex="male" occupation="Assasin" />
        <br />
        <ProfileCard name="Sodiq" age={32} sex="male" occupation="Software Developer" />
        
        <App3 />
        <FavouriteColor />
        <Garage/>
    </div>
  )
}

export default App2