import './JobOpportunities.css';
const JobOpportunities = () => {
    return (
        <div className='jobOpportunities'>
            <h1>Job opportunities</h1>
            <ul>
                <li>
                    <a className='application'>
                        <span className='jobName'>Open Applications</span>
                        <div className='applicationInfo'>
                            <span>Experts</span><span>&middot;</span><span>Stockholm</span><span>&middot;</span><span>Hybrid Remote</span><span><svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><path d="M48 60a12 12 0 1 0 12 12 12.008 12.008 0 0 0-12-12ZM22.605 46.629a6 6 0 1 0 8.508 8.461 24.226 24.226 0 0 1 33.774 0 5.951 5.951 0 0 0 4.254 1.77 6 6 0 0 0 4.254-10.23c-13.618-13.712-37.172-13.712-50.79-.001Z" fill="#000000" class="fill-000000"></path><path d="M90.27 29.777a59.141 59.141 0 0 0-84.539 0 6 6 0 1 0 8.531 8.438c18.117-18.328 49.36-18.328 67.477 0a6 6 0 1 0 8.531-8.438Z" fill="#000000" class="fill-000000"></path></svg></span>
                        </div>
                    </a>
                </li>
                <li>
                    <a className='application'>
                        <span className='jobName'>Open application talented and creative designers</span>
                        <div className='applicationInfo'>
                            <span>Experts</span><span>&middot;</span><span>Stockholm</span><span>&middot;</span><span>Hybrid Remote</span><span><svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><path d="M48 60a12 12 0 1 0 12 12 12.008 12.008 0 0 0-12-12ZM22.605 46.629a6 6 0 1 0 8.508 8.461 24.226 24.226 0 0 1 33.774 0 5.951 5.951 0 0 0 4.254 1.77 6 6 0 0 0 4.254-10.23c-13.618-13.712-37.172-13.712-50.79-.001Z" fill="#000000" class="fill-000000"></path><path d="M90.27 29.777a59.141 59.141 0 0 0-84.539 0 6 6 0 1 0 8.531 8.438c18.117-18.328 49.36-18.328 67.477 0a6 6 0 1 0 8.531-8.438Z" fill="#000000" class="fill-000000"></path></svg></span>
                        </div>
                    </a>
                </li>
                <li>
                    <a className='application'>
                        <span className='jobName'>Senior Mobile Developer</span>
                        <div className='applicationInfo'>
                            <span>Experts</span><span>&middot;</span><span>Stockholm</span><span>&middot;</span><span>Hybrid Remote</span><span><svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><path d="M48 60a12 12 0 1 0 12 12 12.008 12.008 0 0 0-12-12ZM22.605 46.629a6 6 0 1 0 8.508 8.461 24.226 24.226 0 0 1 33.774 0 5.951 5.951 0 0 0 4.254 1.77 6 6 0 0 0 4.254-10.23c-13.618-13.712-37.172-13.712-50.79-.001Z" fill="#000000" class="fill-000000"></path><path d="M90.27 29.777a59.141 59.141 0 0 0-84.539 0 6 6 0 1 0 8.531 8.438c18.117-18.328 49.36-18.328 67.477 0a6 6 0 1 0 8.531-8.438Z" fill="#000000" class="fill-000000"></path></svg></span>
                        </div>
                    </a>
                </li>
            </ul>
            <button><div className='flexItems'>More Jobs
                <svg viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375-12.5-12.5-12.5-32.75 0-45.25L242.8 256 73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z" fill="#ffffff" class="fill-000000"></path></svg></div>
            </button>
        </div>
    )
}

export default JobOpportunities;