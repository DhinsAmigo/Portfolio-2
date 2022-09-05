import React from 'react'
import {FaLinkedin, FaGithub} from "react-icons/fa"

const Homepage = () => {
    return (
        <div>
            <section className="homepage">
                <div className="overlay">
                    <h1>Dinesh N</h1>
                    <p>Front-end Web Developer</p>

                    <ul>
                        <li>
                            <a href="https://linkedin.com/in/dinesh-n-19-01-2001" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/DhinsAmigo" target="_blank" rel="noopener noreferrer"> 
                                <FaGithub />
                            </a>
                        </li>

                    </ul>   
                </div>
            </section>
        </div>
    )
}

export default Homepage;