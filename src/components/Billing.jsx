import React from 'react'
import { apple, bill, google} from '../assets'
import styles, { layout } from '../style';

const Billing = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="billing" className='w-[90%] h-[50%]relative z-[5]' />

        < div className='absolute z-[3] -left-1/2 top-0 w-[80%] h-[80%] rounded-full white__gradient'/> 
        < div className='absolute z-[0] -left-1/2 bottom-0 w-[80%] h-[80%] rounded-full pink__gradient' />
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Easily implement <br className="sm:block hidden"/> new features & buisness updates</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>our platform provides detailed analytics and insights into your website's performance. 
          With real-time data on your website traffic, engagement, 
          and conversion rates, you can make informed decisions about your marketing strategies 
          and optimize your website to drive more traffic and sales.
          </p>
          <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
            <img src={apple} alt="google_play" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'/>
            <img src={google} alt="google_play" className='w-[128px] h-[42px] object-contain cursor-pointer'/>
          </div>
      </div>

    </section>
  )
}

export default Billing
