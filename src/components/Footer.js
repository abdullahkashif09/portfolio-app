import React from 'react'
import "./Footer.css"
import { FaLinkedin, FaGithubSquare, FaFacebookSquare, FaInstagramSquare } from "react-icons/fa"

const Footer = () => {
    return (
        <footer className='footer-container'>
            <div className='socials-list'>
                <a href="https:linkedin.com/in/abdullah-kashif-078686282" className='social-link'>
                    <FaLinkedin className='social-icon'/>
                </a>
                <a href= 'https://github.com/abdullahkashif09' className='social-link'>
                    <FaGithubSquare className='social-icon'/>
                </a>
                <a href="https://www.facebook.com/abdullah.kashif.9699523?mibextid=ZbWKwL" className='social-link'>
                    <FaFacebookSquare className='social-icon'/>
                </a>
                <a href="https://www.instagram.com/abdullahkashif09/" className='social-link'>
                    <FaInstagramSquare className='social-icon'/>
                </a>  
            </div>
            <div className='copyright'>
                © 2024 Developed by Abdullah kashif
            </div>
        </footer>
    )
}

export default Footer