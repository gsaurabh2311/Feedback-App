import React from 'react'

 const Header = ({text}) => {

    const HeaderStyles = {
        backgroundColor: "rgba(0, 0, 0,0.5)",
        color: "#ff6a95"
    }
    return (
        <header style={HeaderStyles}>
            <div className="container">
                <h2>{text}</h2>
            </div>
        </header>
    )
}

Header.defaultProps = {
    text: "Feedback UI",
}
export default Header;

