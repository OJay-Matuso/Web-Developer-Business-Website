import React from 'react'
import { features } from '../constants';
import  styles, {layout} from '../style';
import Button from './Button';


const FeatureCard = ({icon, title, content, index}) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !==features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`} >
      <img src={icon} alt='icon' className='w-[50%] h-[50%] object-contain'/>
    </div>
    <div className='flex-1 flex flex-col ml-3'>
      <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px]'>
        {title}
      </h4>
      <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1'>{content}</p>
    </div>
  </div>

)



const Buisness = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Clear Goals. Clear vision,<br className='sm:block hidden' /> We know what needs happen & how we're making it happen.</h2>
        <p className={`${styles.paragraph} max-w-[470px]`}>If you prefer a personal design, we let you design the layout and leave the rest to us. 
          Our team will take care of the all back-end work, and ensure security measures are in place.
           You can focus on running your business while we handle the web media.</p>

           <Button styles="mt-10" />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => ( 
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Buisness
