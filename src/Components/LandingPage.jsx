import { useRef } from 'react'
import './LandingPage.css';

const LandingPage = ({scroll}) => {

    return (

        <>
            <section className='landingPage'>

                <div className='mainInfo'>

                    <div className='infoContainer'>
                        <h6> Experts · Stockholm · Hybrid Remote
                        </h6>
                        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M346.65 304.3a136 136 0 0 0-180.71 0 21 21 0 1 0 27.91 31.38 94 94 0 0 1 124.89 0 21 21 0 0 0 27.91-31.4Z" fill="#ffffff" class="fill-000000"></path><path d="M256.28 183.7a221.47 221.47 0 0 0-151.8 59.92 21 21 0 1 0 28.68 30.67 180.28 180.28 0 0 1 246.24 0 21 21 0 1 0 28.68-30.67 221.47 221.47 0 0 0-151.8-59.92Z" fill="#ffffff" class="fill-000000"></path><path d="M462 175.86a309 309 0 0 0-411.44 0 21 21 0 1 0 28 31.29 267 267 0 0 1 355.43 0 21 21 0 0 0 28-31.31Z" fill="#ffffff" class="fill-000000"></path><circle cx="256.28" cy="393.41" r="32" fill="#ffffff" class="fill-000000"></circle></svg>
                    </div>

                    <h1>Senior Frontend Developer</h1>

                    <button>Apply for this job</button>

                    <h4>We usually respond within <strong>three days</strong></h4>
                </div>

                <div className='chevronContainer'>
                    <svg onClick={scroll} data-name="Layer 2" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg"><path d="M19 26a1.244 1.244 0 0 1-.883-.366l-7.5-7.5a1.25 1.25 0 0 1 1.767-1.768L19 22.981l6.615-6.614a1.25 1.25 0 0 1 1.767 1.768l-7.5 7.5A1.245 1.245 0 0 1 19 26Z" fill="#ffffff" class="fill-000000"></path><path d="M19 37.44A18.44 18.44 0 1 1 37.44 19 18.461 18.461 0 0 1 19 37.44Zm0-34.38A15.94 15.94 0 1 0 34.94 19 15.957 15.957 0 0 0 19 3.06Z" fill="#ffffff" class="fill-000000"></path></svg>
                </div>

            </section>
        </>
    )
}

export default LandingPage;