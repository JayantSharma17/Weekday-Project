import React, { useState } from 'react'
import hourglassImg from '../assets/hourglass.png'

const Card = () => {
    const [show, setShow] = useState(true);
    return (
        <>
            <div style={{height:'auto'}}>
                <div id='cardMain'>
                    <div id='post'>
                        <img style={{ width: '12px', height: '12px' }} src={hourglassImg} alt="" />
                        <p style={{ fontSize: '12px' }}>Posted 10 days ago</p>
                    </div>

                    <div id='cname'>
                        <div>
                            <img style={{ width: '60px', height: '80px' }} src="https://logo.clearbit.com/hp.com" alt="" />
                        </div>
                        <div id='heading'>
                            <p style={{ fontWeight: '500', color: '#262626', fontSize: '13px' }}>fampay</p>
                            <h2 style={{ fontSize: '17px', fontWeight: '400', color: '#262626' }}>Backend Engineer</h2>
                            <h4 style={{ fontWeight: 'bold', color: '#262626', fontSize: '13px' }}>Bangalore</h4>
                        </div>
                    </div>

                    <h2 style={{ fontSize: '16px', marginTop: '10px', fontWeight: '400' }}>Estimated Salary: ₹18 - 35 LPA ✅</h2>
                    <h1 style={{ fontSize: '18px', fontWeight: '500', marginTop: '20px' }}>About Company:</h1>
                    <p style={{ fontWeight: 'bold' }}>About us</p>
                    <p style={{ fontSize: '14px', height: show ? '20px' : 'auto' }} id='jd' onClick={() => { console.log('ji') }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eum vitae a veritatis dolorum adipisci nisi reiciendis quos, quibusdam fuga quae doloribus omnis quam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eum vitae a veritatis dolorum adipisci nisi reiciendis quos, quibusdam fuga quae doloribus omnis quam.</p>
                    <button onClick={() => { setShow(!show) }} className='viewMore' style={{ height: '20px', borderRadius: '0.4rem', backgroundColor: 'transparent', border: 'none', color: 'blue' }}>View more</button>

                    <p style={{ color: '#262626', fontSize: '13px', fontWeight: '500', letterSpacing: '1px', whiteSpace: '10px', marginTop: '15px' }}>Minimum  Experience</p>
                    <p style={{ color: 'black', fontSize: '13px', fontWeight: '700' }}>2 years</p>
                    <button className='apply' >⚡ Easy Apply</button>
                </div>
            </div>
        </>
    )
}

export default Card