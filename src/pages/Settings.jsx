import React from 'react';
import { useTranslation } from 'react-i18next';

const Settings = () => {
    const { t, i18n } = useTranslation();

    const handleLanguageChange = (event) => {
        const lang = event.target.value;
        i18n.changeLanguage(lang);
    };

    return (
        <>
            <main className="container" style={{ marginTop: '75.5px', paddingBottom: '80px' }}>
                {/* Profile Management Box */}
                <div className="box" style={boxStyle}>
                    <div className="profile-management" style={profileManagementStyle}>
                        <h2 style={headingStyle}>Profile Management</h2>
                        <div className="content" style={contentStyle}>
                            {/* Profile Picture and Change Button */}
                            <div className="profile-pic-container" style={profilePicContainerStyle}>
                                <div className="profile-pic" style={profilePicStyle}>
                                    <img src="/frontend/src/assets/apple-icon.png" alt="Profile Picture" style={imgStyle} />
                                </div>
                                <button style={buttonStyle}>Change Picture</button>
                            </div>

                            {/* Username and Email Fields */}
                            <div className="profile-info" style={profileInfoStyle}>
                                <label htmlFor="username">Username</label>
                                <input type="text" id="username" value="" style={inputStyle} />
                                <label htmlFor="email">Email</label>
                                <input type="text" id="email" value="" style={inputStyle} />
                                <button className="update-button" style={updateButtonStyle}>Update Profile</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Personalization Box */}
                <div className="box personalization" style={boxStyle}>
                    <label htmlFor="theme">{t('theme')}</label>
                    <select id="theme" style={selectStyle}>
                        <option value="light">{t('light_mode')}</option>
                        <option value="dark">{t('dark_mode')}</option>
                    </select>
                    <label htmlFor="language">{t('language')}</label>
                    <select id="language" style={selectStyle} onChange={handleLanguageChange}>
                        <option value="en">{t('english')}</option>
                        <option value="hi">{t('hindi')}</option>
                        <option value="ta">{t('tamil')}</option>
                        <option value="fr">{t('french')}</option>
                        <option value="te">{t('telugu')}</option>
                    </select>
                </div>
            </main>
        </>
    );
};

// Styles
const boxStyle = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
};
const profileManagementStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
};
const headingStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    margin: '0 0 20px 0',
};
const contentStyle = {
    display: 'flex',
    justifyContent: 'flex-start',
    width: '100%',
};
const profilePicContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
};
const profilePicStyle = {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    overflow: 'hidden',
    backgroundColor: '#ddd',
};
const imgStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
};
const profileInfoStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: '20px',
    marginLeft: '80px',
    flex: 1,
};
const inputStyle = {
    width: '95%',
    padding: '10px',
    marginBottom: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
};
const buttonStyle = {
    backgroundColor: '#305881',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '8px 16px',
    cursor: 'pointer',
    fontSize: '14px',
};
const updateButtonStyle = {
    ...buttonStyle,
    marginTop: '10px',
};
const selectStyle = {
    width: 'calc(100% - 20px)',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    marginBottom: '20px',
};

export default Settings;
