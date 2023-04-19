import React from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Sections/HeroSection'
import Stats from './Sections/Stats'
import JoinProgramDetails from './Sections/JoinProgramDetails'

const Container = ({children, bgColor}) => { 
    return (
        <div className={`bg-[${bgColor}] w-full grid place-items-center  bg-white`}>
            <div className="max-w-[1140px]  ">
                {children}
            </div>
        </div>
    )
 }

const Layout = () => {
  return (
    <div className='w-[100vw] overflow-hidden'>
        <Container bgColor={'primary'}>
        <Navbar />
        </Container>

        <HeroSection />
        <Stats/>
        <JoinProgramDetails />
      


        
      
    </div>
  )
}

export default Layout