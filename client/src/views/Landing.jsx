import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
// import {  }
import styles from '../components/style.module.css'


const Landing = () => {

    var counter = 0

    const displayButtons = () => {

        // display the buttons
        document.getElementById("projects").setAttribute("class", `${styles.hoverZoom} ${styles.projects}`)
        document.getElementById("contact").setAttribute("class", `${styles.hoverZoom} ${styles.contact}`)
        document.getElementById("resume").setAttribute("class", `${styles.hoverZoom} ${styles.resume}`)

        // display button labels
        document.getElementById("projects-label").innerHTML = "<p>Personal</p><p>Projects</p>"
        document.getElementById("contact-label").innerHTML = "<p>Contact</p>"
        document.getElementById("resumeLabel").innerHTML = "<p>Professional</p><p>Resume</p>"

        // delay, then call the function to display background
        setTimeout(displayBackground, 500)

        // delay, then call the function to display socail links
        setTimeout(displaySocial, 2500)
        
        // delay, then call the function to display copyright and est. text
        setTimeout(displayCopyright, 3000)

    }

    // --> DISPLAY BACKGROUND <--
    const displayBackground = () => {
        
        // displays each div that makes up the background "grid"
        document.getElementById("bg-horizontal").setAttribute("class", styles.bgHorizontal)
        document.getElementById("bg-vertical-1").setAttribute("class", styles.bgVertical1)
        document.getElementById("bg-vertical-2").setAttribute("class", styles.bgVertical2)
        document.getElementById("bg-vertical-3").setAttribute("class", styles.bgVertical3)
        document.getElementById("bg-vertical-4").setAttribute("class", styles.bgVertical4)
        document.getElementById("bg-vertical-5").setAttribute("class", styles.bgVertical5)
        // document.getElementById("background-image").setAttribute("class", styles.backgroundImage)
    }

    // --> DISPLAY SOCIAL LINKS <--
    const displaySocial = () => {
        document.getElementById("social").setAttribute("class", styles.social)

        document.getElementById("socialLinkedIn").setAttribute("class", styles.socialLinkedIn)
        document.getElementById("socialLinkedIn").setAttribute("href", "linkedin.com/in/brian-f-gaudet")

        document.getElementById("socialGitHub").setAttribute("class", styles.socialGitHub)
        document.getElementById("socialGitHub").setAttribute("href", "github.com/Gaudet-B")
    }

    // --> DISPLAY COPYRIGHT AND EST. TEXT <--
    const displayCopyright = () => {
        document.getElementById("copyright").setAttribute("class", styles.copyright)
        document.getElementById("copyright").innerHTML = "<p>© BrianGaudet</p><p>Est. 1986</p><p>Boston, MA</p>"
    }

    // --> BUTTON onMouseOver <--
    const buttonHover = (e) => {
        e.setAttribute("class", styles.unmask)
    }
    // --> BUTTON onMouseOut <--
    const buttonOut = (e) => {
        e.setAttribute("class", styles.mask)
    }

    // the lines the typewriter will write
    const dataText = ["Brian F. Gaudet", "Full Stack", "Web Developer"]

    useEffect(() => {
        // const script = document.createElement("script")
        // script.src = "../components/landingScript.js"
        // script.async = true
        // document.body.appendChild(script)
        // document.addEventListener('DOMContentLoaded', function (event) {
        
        // the function calls itself until the array of words is empty
        const typeWriter = (text, i, fnCallback) => {
            // check to make sure there's still text to type
            if (text == undefined) return
            if (i < text.length) {
                // FIRST WORD => length of 15 is the first word - if the array of words changes, update these lengths
                if (text.length == 15) {
                    // if this is the last character in the word, stop the blinking cursor
                    if (i == text.length - 1) {
                        // add next character to h1 w/o blinking cursor
                        document.querySelector("h1").innerHTML = text.substring(0, i + 1)
                    } else {
                        // add next character to h1 w/ blinking cursor
                        document.querySelector("h1").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>'
                    }
                // SECOND WORD
                } else if (text.length == 10) {
                    if (i == text.length - 1) {
                        // add next character to line-two w/o blinking cursor
                        document.getElementById("line-two").innerHTML = text.substring(0, i + 1)
                    } else {
                        // add next character to line-two w/ blinking cursor
                        document.getElementById("line-two").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>'
                    }
                // THIRD WORD
                } else if (text.length == 13) {
                    // if this is the last character in the THIRD WORD, call FUNCTION TO DISPLAY BUTTONS
                    if (i == text.length - 1) {
                        // add next character to line-three w/ blinking cursor - **keep cursor blinking since this is the last line**
                        document.getElementById("line-three").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>'
                        // --> CALL FUNCTION TO DISPLAY BUTTONS: <--
                        setTimeout(displayButtons, 1000)
                    } else {
                        // add next character to line-three w/ blinking cursor
                        document.getElementById("line-three").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>'
                    }
                }
    
                // short wait between characters
                setTimeout(function () {
                    typeWriter(text, i + 1, fnCallback)
                }, 100)
            }
            // when the word is finished, call for the next word if it exists
            else if (typeof fnCallback == 'function') {
                // call callback after timeout
                setTimeout(fnCallback, 700)
            }
        }
        // function to start the typewriter
        const StartTextAnimation = (i) => {
            if (typeof dataText[i] == 'undefined') {
                setTimeout(function () {
                    StartTextAnimation(0)
                }, 20000)
            }
            console.log(counter);
            // check that we haven't hit the final (THIRD) word in the array
            if (i < 4 && counter < 4) {
                // the counter keeps the typewriter from repeating once finished with the array of words so the text remains on-screen
                counter++
                // call the Typewriter function
                typeWriter(dataText[i], 0, function () {
                    // start the next line
                    StartTextAnimation(i + 1)
                })
            }
        }
        // start the animation
        StartTextAnimation(0)
        // })
    })

    const typedLineClass = `${styles.typedLine} ${styles.line1}`

    return (
        <div id="background-image" className={styles.bg}>
            <div id="bg-horizontal"></div>
            <div id="bg-vertical-1"></div>
            <div id="bg-vertical-2"></div>
            <div id="bg-vertical-3"></div>
            <div id="bg-vertical-4"></div>
            <div id="bg-vertical-5"></div>
            <div className={styles.body}>
                <h1 id="name" className={typedLineClass}></h1>
                <h3 id="line-two" className={typedLineClass}></h3>
                <h3 id="line-three" className={typedLineClass}></h3>
                <div id="display-buttons" className={styles.buttonContainer}>
                    {/* Projects Button */}
                    <div className={styles.button}>
                        <a id="projects" href="C:/Portfolio/typewriter/projects.html" className="empty">
                            <div className={styles.mask} onMouseOver={buttonHover} onMouseOut={buttonOut}></div>
                        </a>
                        <div id="projects-label" className={styles.label}></div>
                    </div>
                    {/* Contact Button */}
                    <div className={styles.button}>
                        <a id="contact" href="#" className="empty">
                            <div className="mask" onMouseOver={buttonHover} onMouseOut={buttonOut}></div>
                        </a>
                        <div id="contact-label" className={styles.label}></div>
                        {/* Socail Links */}
                        <div id="social" className="">
                            <a id="socialLinkedIn"></a>
                            <a id="socialGitHub"></a>
                        </div>
                        {/* Copyright & Est. Text */}
                        <div id="copyright" className=""></div>
                    </div>
                    {/* Resume Button */}
                    <div className={styles.button}>
                        <a id="resume" href="C:/Portfolio/typewriter/resume.html" className="empty">
                            <div className="mask" onMouseOver={buttonHover} onMouseOut={buttonOut}></div>
                        </a>
                        <div id="resumeLabel" className={styles.label}></div>
                    </div>

                </div>
            </div>
            {/* <script type="text/javascript" src="/src/components/landingScript.js"></script> */}
        </div>
    )
}

export default Landing