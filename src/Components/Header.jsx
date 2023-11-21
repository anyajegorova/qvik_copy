import './Header.css';
const Header = () => {
    return (
        <header>
            <div className='menuContainer'>
                <svg viewBox="0 0 32 32" space="preserve" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 32 32"><path d="M4 10h24a2 2 0 0 0 0-4H4a2 2 0 0 0 0 4zm24 4H4a2 2 0 0 0 0 4h24a2 2 0 0 0 0-4zm0 8H4a2 2 0 0 0 0 4h24a2 2 0 0 0 0-4z" fill="#ffffff" class="fill-000000"></path></svg>
                <h5 className="careerMenu">
                    CAREER MENU
                </h5>
            </div>
            <div className='quickImageContainer'>
                <img src="https://images.teamtailor-cdn.com/images/s3/teamtailor-production/logotype-v3/image_uploads/f9c95437-5e8b-48a7-ab5f-e10d539adaa3/original.png" />
            </div>
            <div className='shareIconContainer'>
                <svg className='shareIcon' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 11v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-9h2v9h14v-9h2Zm-8-5.586V16h-2V5.414L7.707 8.707 6.293 7.293 12 1.586l5.707 5.707-1.414 1.414L13 5.414Z" fill-rule="evenodd" fill="#ffffff" class="fill-000000"></path></svg>
            </div>

        </header>
    )
}

export default Header;