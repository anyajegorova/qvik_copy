import { useState, useRef } from 'react'
import './App.css'
import Header from './Header'

function App() {

  const myRef = useRef(null);
  const scroll = () => myRef.current.scrollIntoView({ behavior: 'smooth' })
  return (
    <>
      <Header />
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
      <section className='jobDescribtion' ref={myRef}>


        <div className='mainDescription'>
          <p>
            We are looking for talented Senior software developers that understand self leadership, and are nice people. You are likely a startup minded person with a genuine interest to build something new. You are not afraid to be hands-on in the projects but also want to participate in decision making and shaping the future of Qvik in Sweden.
          </p>
          <p>
            The role will have opportunities to take part in decision making outside of the project work of our many awesome clients in Sweden, which includes some of the biggest digital entertainment companies and major payment service providers.
          </p>
          <p>
            Qvik is a consulting firm like no other. Operating in two countries, we are both a nimble startup here in Sweden and a big company in Finland. This means that we are free to operate as we want to, but still have the muscles of a big company when we need to. The Swedish offices started in August 2018. Qvik builds digital solutions with real, measurable value - and meanwhile we have lots of fun :)
          </p>
          <p>
            Qvik builds its employer image through being present in the developer communities and even creating new expert communities when needed.
          </p>
          <p>
            Qvik was established in 2009 with 8,6M€ (91M SEK) revenue, about 110 people in total, 9 people hired in Sweden (currently). The company is owned completely by its employees.
          </p>
          <p>
            We usually set up a remote office somewhere warm and sunny when things are dark and cold in the north (January - March). In 2018 we went to Phuket, Thailand and in 2019 Mauritius. It was canceled last year due to covid and if we travel next year will be decided in the coming months.
          </p>
          <p>
            More about us: <a href='https://qvik.com/sweden/'>https://qvik.com/sweden/</a>
          </p>
          <h4>
            Requirements
          </h4>
          <ul>
            <li>
              Experience in any of the major frameworks (React, Angular, Vue.js)
            </li>
            <li>
              Experience from modern web technologies and know your way around HTML and CSS.
            </li>
            <li>
              Experience creating beautiful web applications and having good UX sensibilities.
            </li>
          </ul>
          <h4>
            Plusses
          </h4>
          <p>
            Taking part in communities and public speaking is a huge plus for any candidate. Previous background in consulting is a plus. Any other programming experience or language skills is obviously a huge plus.
          </p>
          <h4>
            Perks
          </h4>

          <ul>
            <li>
              Competitive salary.
            </li>
            <li>
              Very good pension plan and assets management from a private healthcare facilitator
            </li>
            <li>
              Healthcare Insurance without need to go through public healthcare first.

            </li>
            <li>
              30 days vacation.
            </li>
            <li>
              Sports Allowance (friskvårdsbidrag).
            </li>
            <li>
              Company leased car / apartment, if chosen as part of salary.
            </li>
            <li>
              Always interesting and challenging projects.
            </li>
          </ul>
        </div>
        <div className='tableContainer'>
          <table>
            <tr>
              <th>Department</th>
              <th>Locations</th>
              <th>Remote status</th>
            </tr>
            <tr>
              <th>Experts</th>
              <th>Stockholm</th>
              <th>Hybrid remote</th>
            </tr>
          </table>
        </div>

        <div className='contactExpert'>
          <picture>
            <img src='https://images.teamtailor-cdn.com/images/s3/teamtailor-production/square_226-v4/image_uploads/a000bd18-bd90-41b5-a76c-a8cbfa342212/original.png' />
          </picture>
          <div className='contactExpertInfo'>
            <h5>CONTACT</h5>
            <h2>Carlos Danna</h2>
            <h4>Experts</h4>
          </div>
        </div>
        <div className='jobOpportunities'>
          <h1>Job opportunities</h1>
          <ul>
            <li>
              <a className='application'>
                <span className='jobName'>Open Applications</span>
                <div className='applicationInfo'>
                  <span>Experts</span><span>&middot;</span><span>Stockholm</span><span>&middot;</span><span>Hybrid Remote</span><svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><path d="M48 60a12 12 0 1 0 12 12 12.008 12.008 0 0 0-12-12ZM22.605 46.629a6 6 0 1 0 8.508 8.461 24.226 24.226 0 0 1 33.774 0 5.951 5.951 0 0 0 4.254 1.77 6 6 0 0 0 4.254-10.23c-13.618-13.712-37.172-13.712-50.79-.001Z" fill="#000000" class="fill-000000"></path><path d="M90.27 29.777a59.141 59.141 0 0 0-84.539 0 6 6 0 1 0 8.531 8.438c18.117-18.328 49.36-18.328 67.477 0a6 6 0 1 0 8.531-8.438Z" fill="#000000" class="fill-000000"></path></svg>
                </div>
              </a>
            </li>
            <li>
              <a className='application'>
                <span className='jobName'>Open application talented and creative designers</span>
                <div className='applicationInfo'>
                  <span>Experts</span><span>&middot;</span><span>Stockholm</span><span>&middot;</span><span>Hybrid Remote</span><svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><path d="M48 60a12 12 0 1 0 12 12 12.008 12.008 0 0 0-12-12ZM22.605 46.629a6 6 0 1 0 8.508 8.461 24.226 24.226 0 0 1 33.774 0 5.951 5.951 0 0 0 4.254 1.77 6 6 0 0 0 4.254-10.23c-13.618-13.712-37.172-13.712-50.79-.001Z" fill="#000000" class="fill-000000"></path><path d="M90.27 29.777a59.141 59.141 0 0 0-84.539 0 6 6 0 1 0 8.531 8.438c18.117-18.328 49.36-18.328 67.477 0a6 6 0 1 0 8.531-8.438Z" fill="#000000" class="fill-000000"></path></svg>
                </div>
              </a>
            </li>
            <li>
              <a className='application'>
                <span className='jobName'>Senior Mobile Developer</span>
                <div className='applicationInfo'>
                  <span>Experts</span><span>&middot;</span><span>Stockholm</span><span>&middot;</span><span>Hybrid Remote</span><svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><path d="M48 60a12 12 0 1 0 12 12 12.008 12.008 0 0 0-12-12ZM22.605 46.629a6 6 0 1 0 8.508 8.461 24.226 24.226 0 0 1 33.774 0 5.951 5.951 0 0 0 4.254 1.77 6 6 0 0 0 4.254-10.23c-13.618-13.712-37.172-13.712-50.79-.001Z" fill="#000000" class="fill-000000"></path><path d="M90.27 29.777a59.141 59.141 0 0 0-84.539 0 6 6 0 1 0 8.531 8.438c18.117-18.328 49.36-18.328 67.477 0a6 6 0 1 0 8.531-8.438Z" fill="#000000" class="fill-000000"></path></svg>
                </div>
              </a>
            </li>
          </ul>
          <button><div className='flexItems'>More Jobs
            <svg viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375-12.5-12.5-12.5-32.75 0-45.25L242.8 256 73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z" fill="#ffffff" class="fill-000000"></path></svg></div>
          </button>
        </div>


      </section>
      <section>

      </section>
      <section>

      </section>
    </>
  )
}

export default App
