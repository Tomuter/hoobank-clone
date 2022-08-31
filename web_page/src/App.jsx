import React from 'react'
import styles from './style'
import {NavBar,Hero,Stats,Billing,Business,CTA,CardDeal,Clients,Testimonial,Footer} from './components'
const App = () => {
  return (
    <div className=' bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
         <div className={`${styles.boxWidth}`}>
           <NavBar />
         </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
           <Hero />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
           <Stats />
           <Business />
           <Billing />
           <CardDeal />
           <Testimonial />
           <Clients />
           <CTA />
           <Footer />
        </div>
      </div>
    </div>
  )
}

export default App