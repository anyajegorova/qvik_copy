import './ContactForm.css';

const ContactForm = () => {
    const submitForm = () => {
        e.preventDefault();
      }
    
    return (
        <>
            <section className='contactForm'>
                <div className='infoContainer'>
                    <h6> Experts · Stockholm · Hybrid Remote
                    </h6>
                    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M346.65 304.3a136 136 0 0 0-180.71 0 21 21 0 1 0 27.91 31.38 94 94 0 0 1 124.89 0 21 21 0 0 0 27.91-31.4Z" fill="#ffffff" class="fill-000000"></path><path d="M256.28 183.7a221.47 221.47 0 0 0-151.8 59.92 21 21 0 1 0 28.68 30.67 180.28 180.28 0 0 1 246.24 0 21 21 0 1 0 28.68-30.67 221.47 221.47 0 0 0-151.8-59.92Z" fill="#ffffff" class="fill-000000"></path><path d="M462 175.86a309 309 0 0 0-411.44 0 21 21 0 1 0 28 31.29 267 267 0 0 1 355.43 0 21 21 0 0 0 28-31.31Z" fill="#ffffff" class="fill-000000"></path><circle cx="256.28" cy="393.41" r="32" fill="#ffffff" class="fill-000000"></circle></svg>
                </div>
                <h1>Senior Frontend Developer</h1>
                <form onSubmit={submitForm}>
                    <h3>Personal Information</h3>
                    <div className='socialMediaContainer'>
                        <button>
                            <div className='buttonContentContainer'>
                                <svg viewBox="0 0 512 512" xml: space="preserve" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><path d="M449.446 0C483.971 0 512 28.03 512 62.554v386.892C512 483.97 483.97 512 449.446 512H342.978V319.085h66.6l12.672-82.621h-79.272v-53.617c0-22.603 11.073-44.636 46.58-44.636H425.6v-70.34s-32.71-5.582-63.982-5.582c-65.288 0-107.96 39.569-107.96 111.204v62.971h-72.573v82.621h72.573V512H62.554C28.03 512 0 483.97 0 449.446V62.554C0 28.03 28.029 0 62.554 0h386.892Z" fill="#ffffff" class="fill-000000"></path></svg>
                                Apply with Facebook
                            </div>

                        </button>
                        <button>
                            <div className='buttonContentContainer'>
                                <svg viewBox="0 0 56.693 56.693" xml: space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="M30.071 27.101v-.077a2.031 2.031 0 0 1-.05.077h.05z" fill="#ffffff" class="fill-000000"></path><path d="M49.265 4.667H7.145c-2.016 0-3.651 1.596-3.651 3.563v42.613c0 1.966 1.635 3.562 3.651 3.562h42.12c2.019 0 3.654-1.597 3.654-3.562V8.23c0-1.968-1.636-3.563-3.654-3.563zm-30.79 41.637H11.01V23.845h7.465v22.459zm-3.732-25.527h-.05c-2.504 0-4.124-1.725-4.124-3.88 0-2.203 1.67-3.88 4.223-3.88 2.554 0 4.125 1.677 4.175 3.88 0 2.155-1.622 3.88-4.224 3.88zm30.651 25.527h-7.465V34.286c0-3.018-1.08-5.078-3.781-5.078-2.062 0-3.29 1.389-3.831 2.731-.197.479-.245 1.149-.245 1.821v12.543h-7.465s.098-20.354 0-22.459h7.465v3.179c.992-1.53 2.766-3.709 6.729-3.709 4.911 0 8.594 3.211 8.594 10.11v12.88z" fill="#ffffff" class="fill-000000"></path></svg>
                                Apply with LinkedIn
                            </div>

                        </button>
                    </div>
                    <div className='inputContainer'>
                        <div className='inputLabelContainer'>
                            <label>First name</label>
                            <input type='text' placeholder='Jane' />
                        </div>
                        <div className='inputLabelContainer'>
                            <label>Last name</label>
                            <input type='text' placeholder='Doe' />
                        </div>

                    </div>
                    <div className='inputContainer'>
                        <div className='inputLabelContainer'>
                            <label>Email *</label>
                            <input placeholder='Email' />
                        </div>
                        <div className='inputLabelContainer'>
                            <label>Phone</label>
                            <input placeholder='+46 70 123 45 67' />
                        </div>

                    </div>
                    <label>Upload CV</label>
                    <div id='fileDrop'>
                        <input type='file' className='fileDrop' />
                    </div>

                    <label>Additional files</label>
                    <div id='fileDrop'>
                        <input type='file' className='fileDrop' />
                    </div>

                    <label>Cover letter</label>
                    <textarea id='coverLetter' placeholder='Write your letter...' />
                    <div>

                        <div className='checkboxContainer'>
                            <input type='checkbox' value='privacyPolicy' />
                            <label for='privacyPolicy' >By submitting this application, I agree that I have read the <a>Privacy Policy</a> and confirm that QVIK AB store my personal details to be able to process my job
                                application.</label>
                        </div>
                        <input type='submit' value="Submit application" />
                    </div>

                </form>
            </section>

        </>
    )
}

export default ContactForm;