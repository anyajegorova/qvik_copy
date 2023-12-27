import { useState } from 'react';
import './Career.css';

// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
// const options = ['@qvik.fi', '@qvik.com'];
const Career = () => {

    // const [value, setValue] = useState(options[0]);
    // const [inputValue, setInputValue] = useState('');

    return (
        <>
            <section className='career'>
                <div className='careerSite'>
                    <h3>Career site</h3>
                    <a>Start</a>
                    <a>People</a>
                    <a>Jobs</a>
                    <a>Data & privacy</a>
                    <a>Manage cookies</a>
                </div>
                <div className='login'>
                    <a>Employee login</a>
                    <a>Candidate Connect login</a>
                </div>

                    <div className='recruitConnectContainer'>
                        <div className='recruitConnect'>
                            <h1>Already working at QVIK AB?</h1>
                            <h3>Let's recruit together and find your next colleague.</h3>
                            {/* <div>
                            <br />
                            <Autocomplete
                                value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                                inputValue={inputValue}
                                onInputChange={(event, newInputValue) => {
                                    setInputValue(newInputValue);
                                }}
                                id="controllable-states-demo"
                                options={options}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="Controllable" />}
                            />
                        </div> */}
                            <select>
                                <option selected hidden>
                                    name@qvik.com
                                </option>
                                <option>
                                    qvik.fi
                                </option>
                                <option>
                                    qvik.com
                                </option>
                            </select>

                        </div>
                        <ul>
                            <li>
                                <img src='https://images.teamtailor-cdn.com/images/s3/teamtailor-production/employee_picture-v3/image_uploads/ae40f1bb-5225-4452-ad62-040808f34215/original.jpeg' />
                            </li>
                            <li>
                                <img src='https://images.teamtailor-cdn.com/images/s3/teamtailor-production/employee_picture-v3/image_uploads/0c7020a2-fe3e-4044-a8cd-27bdd7eee599/original.png' />
                            </li>
                            <li>
                                <img src='https://images.teamtailor-cdn.com/images/s3/teamtailor-production/employee_picture-v3/image_uploads/50f93dff-618d-4c3d-88ad-b3daa176cde4/original.jpeg' />
                            </li>
                            <li>
                                <img src='https://images.teamtailor-cdn.com/images/s3/teamtailor-production/employee_picture-v3/image_uploads/a000bd18-bd90-41b5-a76c-a8cbfa342212/original.png' />
                            </li>
                        </ul>
                    </div>
                

            </section>
        </>
    )
}

export default Career;