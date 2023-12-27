import './JobDescription.css';
import JobOpportunities from './JobOpportunities';

const JobDescription = ({ myRef }) => {
    return (
        <>
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
                        <thead>
                            <tr>
                                <th>Department</th>
                                <th>Locations</th>
                                <th>Remote status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Experts</th>
                                <th>Stockholm</th>
                                <th>Hybrid remote</th>
                            </tr>
                        </tbody>

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

                <JobOpportunities />

            </section>
        </>
    )
}

export default JobDescription; 