import React from 'react';
import './Price.css';

const Price = () => {
  return (
    <div className='DisplayPrice'>
    <div className='SectionFirst'>
    <div><span className="Percent">0.48%</span></div>
    <label className='Duration1'>5 mins</label>
    </div>

    <div className='SectionSecond'>
    <div><span className="Percent1">7.58%</span></div>
    <label className='Duration2'>1 Hour</label>
    </div>


    <div className='PriceSection'>
    <div><label className='Price'>₹ 1,29,890</label></div>
    <label>Average BTC/INR net price including commission</label>
    </div>
    
    <div className='SectionThird'>
    <div><span className="Percent2">17.58%</span></div>
    <label className='Duration3'>1 Day</label>
    </div>

    <div className='SectionFourth'>
    <div><span className="Percent3">71.58%</span></div>
    <label className='Duration4'>7 Days</label>
    </div>
    </div>
    

  )
}

export default Price;