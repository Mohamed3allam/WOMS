import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
        

        {/* <nav>
            <div className="menu">
                <p className="website_name">LOGO</p>
                <div className="menu_links">
                    <Link href="" className="link">about</Link>
                    <Link href="" className="link">projects</Link>
                    <Link href="" className="link">contacts</Link>
                </div>
                <div className="menu_icon">
                    <span className="icon"></span>
                </div>
            </div>
        </nav> */}

    
        {/* <h1>404 Error Page #2</h1> */}
        <p className="zoom-area"><b>We are sorry you must have been lost</b> </p>
        <section className="error-container">
            <span className="four"><span className="screen-reader-text">4</span></span>
            <span className="zero"><span className="screen-reader-text"></span></span>
            <span className="four"><span className="screen-reader-text">4</span></span>
        </section>
        <div className="link-container">
            <Link to="/" className="more-link">Go Home</Link>
        </div>


    </>


  )
}

export default NotFound