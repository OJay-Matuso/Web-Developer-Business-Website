import React from 'react'
import styles, { layout } from '../style';
import Button from './Button';
import { card } from '../assets';

const CardDeal = () => (
<section className={layout.section}>
  <div className={layout.sectionInfo}>
    <h2 className={styles.heading2}>Providing our clients,<br className='sm:block hidden' /> with flexible & secure payment options.</h2>
    <p className={`${styles.paragraph} max-w-[470px] mt-5`}>We offer our clients a variety of convenient payment methods to ensure a seamless and hassle-free experience. 
      Our commitment to providing flexible payment options underscores our dedication to meeting the diverse needs of our valued customers.</p>
  <Button  styles="mt-10"/>
  </div>
  <div className={layout.sectionImg}>
    <img src={card} alt="card" className='w-[100%] h-[100%]' />
  </div>
  </section>
  )


export default CardDeal
