import React from 'react'
import Page1 from '../../Screen/Page1'
import Page2 from '../../Screen/Page2'
import Page3 from '../../Screen/Page3'
import Page4 from '../../Screen/Page4'
import Page5 from '../../Screen/Page5'
import Footer from '../../Screen/Footer'
import FAQ from '../../Screen/FAQSection/FAQ'

const Home = () => {
  return (
    <div>
      <Page1/>
      <Page2/>
      <Page3/>
      <Page4/>
      <Page5/>
      <FAQ/>
      <Footer/>
    </div>
  )
}

export default Home
