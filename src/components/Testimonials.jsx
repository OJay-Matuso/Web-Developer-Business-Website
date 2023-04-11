import React from 'react';
import styles from '../style';
import FeedbackCard from './FeedBackCard'
import { feedback } from '../constants';

const Testimonials = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient' />
    <div />

    <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
      <h1 className={styles.heading2}> What people are saying <br className='sm:block hidden' />about our services </h1>
      <div className='w-full md:mt-0 mt-6'>
        <p className={`${styles.paragraph} text-lef max-w-[450px]`}>We can establish a robust and optimized website, coupled with active and engaging social media profiles that
           create a strong online presence that effectively captures clients target market and enhances brand visibility, 
          resulting in increased customer engagement and conversions</p>
      </div>
      </div>

      <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]'>
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>


    
  </section>

)


export default Testimonials
