import React from 'react';

const Navbar = () => {
    return (
        <header className="app-header">
            <div className="logo">
                <img src="/assets/TestLogo.svg" alt="Tech.Care" />
            </div>

            <nav className="main-nav">
                <ul className="nav-links">
                    <li>
                        <a href="#" className="nav-item">
                            <img src="/assets/home_FILL0_wght300_GRAD0_opsz24.svg" alt="" />
                            Overview
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-item active">
                            <img src="/assets/group_FILL0_wght300_GRAD0_opsz24.svg" alt="" />
                            Patients
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-item">
                            <img src="/assets/calendar_today_FILL0_wght300_GRAD0_opsz24.svg" alt="" />
                            Schedule
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-item">
                            <img src="/assets/chat_bubble_FILL0_wght300_GRAD0_opsz24.svg" alt="" />
                            Message
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-item">
                            <img src="/assets/credit_card_FILL0_wght300_GRAD0_opsz24.svg" alt="" />
                            Transactions
                        </a>
                    </li>
                </ul>
            </nav>

            <div className="profile-summary">
                <div className="doctor-info-container" style={{display:'flex', alignItems:'center', gap: '12px'}}>
                    <img 
                      src="/assets/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png" 
                      alt="Dr. Jose Simmons" 
                      className="doctor-avatar" 
                    />
                    <div className="doctor-info">
                        <span className="name">Dr. Jose Simmons</span>
                        <span className="role">General Practitioner</span>
                    </div>
                </div>
                <div className="utility-icons" style={{display:'flex', gap: '12px', marginLeft: '24px'}}>
                    <img src="/assets/settings_FILL0_wght300_GRAD0_opsz24.svg" alt="Settings" style={{cursor:'pointer'}} />
                    <img src="/assets/more_vert_FILL0_wght300_GRAD0_opsz24.svg" alt="More" style={{cursor:'pointer'}} />
                </div>
            </div>
        </header>
    );
}

export default Navbar;
