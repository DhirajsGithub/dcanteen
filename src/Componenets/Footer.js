import React, { Fragment } from 'react'
import classes from './Footer.module.css'

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className={classes.footer}>
        <div className={classes.socialIcons}>
            <div><a href="https://github.com/DhirajsGithub" target="_blank"><i className="fa-brands fa-github"></i></a></div>
            <div><a href="https://www.instagram.com/_d.codes_/" target="_blank"><i className="fa-brands fa-instagram"></i></a></div>
            <div><a href="https://www.linkedin.com/in/dhiraj-borse-141267240/" target="_blank"><i className="fa-brands fa-linkedin"></i></a></div>
        </div>
        <div className={classes.copyRight}>
            <p>&#169; {year} Copyright : <span style={{fontFamily: 'cursive' }}>D</span></p>
        </div>
    </div>
  )
}

export default Footer