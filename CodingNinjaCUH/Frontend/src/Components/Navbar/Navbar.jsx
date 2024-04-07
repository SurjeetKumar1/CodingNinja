import React from 'react'

const Navbar = () => {
    return (
        <div>

            <div className='te'>
                <img  className='' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUFAKeRhQ3QUEUnpRdNhEcbaGMvU3qh4ti_K7pUzgP0g&s' alt='logo' />
                <div className=''>
                    <div>
                        <span>Coding Ninjas</span>
                        <div>Student Chapter</div>
                    </div>
                    <div>Central University Of Haryana</div>
                </div>
            </div>

            <div className=''>
                <ul>
                    <li>Home</li>
                    <li>Events</li>
                    <li>About</li>
                    <li>Team</li>
                    <li>Social Media</li>
                </ul>
            </div>
            
            <div>
                <button>Contact us</button>
            </div>
        </div>
    )
}

export default Navbar
