import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import styles from '../components/landing.style.module.css'


const Landing = () => {

    // const [classToggle, setClassToggle] = useState(false)
    // const [counter, setCounter] = useState(0)
    const [loaded, setLoaded] = useState(false)

    // const handleToggle = e => {
    //     if (!classToggle) {
    //         setClassToggle(true)
    //         if (e.target.id == "projects") {
    //             e.target.className = `${styles.projects} ${styles.hoverZoom} ${styles.float}`
    //         } else if (e.target.id == "contact") {
    //             e.target.className = `${styles.contact} ${styles.hoverZoom} ${styles.float}`
    //         } else if (e.target.id == "resume") {
    //             e.target.className = `${styles.resume} ${styles.hoverZoom} ${styles.float}`
    //         }
    //     }
    //     else if (classToggle == true) {
    //         setClassToggle(false)
    //         if (e.target.id == "projects") {
    //             e.target.className = `${styles.projects} ${styles.hover} ${styles.hoverZoom}`
    //         } else if (e.target.id == "contact") {
    //             e.target.className = `${styles.contact} ${styles.hover} ${styles.hoverZoom}`
    //         } else if (e.target.id == "resume") {
    //             e.target.className = `${styles.resume} ${styles.hover} ${styles.hoverZoom}`
    //         }
    //     }
    // }

    var counter = 0

    const displayButtons = () => {

        // display the buttons and thier labels
        let project = document.getElementById("projects")
        setTimeout(() => project.setAttribute("class", styles.projects), 200)
        setTimeout(() => project.setAttribute("class", `${styles.hoverZoom} ${styles.projects}`), 2000)
        let projectLabel = document.getElementById("projects-label")
        setTimeout(() => projectLabel.setAttribute("class", styles.label), 2000)
        setTimeout(() => projectLabel.innerHTML = "<p>Personal</p><p>Projects</p>", 2000)

        let contact = document.getElementById("contact")
        setTimeout(() => contact.setAttribute("class", styles.contact), 200)
        setTimeout(() => contact.setAttribute("class", `${styles.hoverZoom} ${styles.contact}`), 2000)
        let contactLabel = document.getElementById("contact-label")
        setTimeout(() => contactLabel.setAttribute("class", styles.label), 2000)
        setTimeout(() => contactLabel.innerHTML = "<p>Contact</p>", 2000)

        let resume = document.getElementById("resume")
        setTimeout(() => resume.setAttribute("class", styles.resume), 200)
        setTimeout(() => resume.setAttribute("class", `${styles.hoverZoom} ${styles.resume}`), 2000)
        let resumeLabel = document.getElementById("resumeLabel")
        setTimeout(() => resumeLabel.setAttribute("class", styles.label), 2000)
        setTimeout(() => resumeLabel.innerHTML = "<p>Professional</p><p>Resume</p>", 2000)

        // add the class for float animation, asynchronously so buttons do not float in unison
        // setTimeout(() => project.setAttribute("class", `${styles.hoverZoom} ${styles.projects} ${styles.float}`), 3800)
        // setTimeout(() => contact.setAttribute("class", `${styles.hoverZoom} ${styles.contact} ${styles.float}`), 3100)
        // setTimeout(() => resume.setAttribute("class", `${styles.hoverZoom} ${styles.resume} ${styles.float}`), 3500)

        

    }

    // --> DISPLAY BACKGROUND <--
    const displayBackground = () => {
        
        // displays each div that makes up the background "grid"
        document.getElementById("bg-horizontal").setAttribute("class", styles.bgHorizontal)

        document.getElementById("bg-vertical-0").setAttribute("class", `${styles.bgVertical} ${styles.bgVertical0}`)
        setTimeout(() => document.getElementById("bg-vertical-0-lights").setAttribute("class", styles.bgLights), 3700 + 30)
        setTimeout(() => document.getElementById("bg-vertical-0-light-block").setAttribute("class", styles.bgLightBlock), 3700)

        document.getElementById("bg-vertical-1").setAttribute("class", `${styles.bgVertical} ${styles.bgVertical1}`)
        setTimeout(() => document.getElementById("bg-vertical-1-lights").setAttribute("class", styles.bgLights), 2900 + 30)
        setTimeout(() => document.getElementById("bg-vertical-1-light-block").setAttribute("class", styles.bgLightBlock), 2900)

        document.getElementById("bg-vertical-2").setAttribute("class", `${styles.bgVertical} ${styles.bgVertical2}`)
        setTimeout(() => document.getElementById("bg-vertical-2-lights").setAttribute("class", styles.bgLights), 4900 + 30)
        setTimeout(() => document.getElementById("bg-vertical-2-light-block").setAttribute("class", styles.bgLightBlock), 4900)

        document.getElementById("bg-vertical-3").setAttribute("class", `${styles.bgVertical} ${styles.bgVertical3}`)
        setTimeout(() => document.getElementById("bg-vertical-3-lights").setAttribute("class", styles.bgLights), 4100 + 30)
        setTimeout(() => document.getElementById("bg-vertical-3-light-block").setAttribute("class", styles.bgLightBlock), 4100)

        document.getElementById("bg-vertical-4").setAttribute("class", `${styles.bgVertical} ${styles.bgVertical4}`)
        setTimeout(() => document.getElementById("bg-vertical-4-lights").setAttribute("class", styles.bgLights), 3800 + 30)
        setTimeout(() => document.getElementById("bg-vertical-4-light-block").setAttribute("class", styles.bgLightBlock), 3800)

        document.getElementById("bg-vertical-5").setAttribute("class", `${styles.bgVertical} ${styles.bgVertical5}`)
        setTimeout(() => document.getElementById("bg-vertical-5-lights").setAttribute("class", styles.bgLights), 3500 + 30)
        setTimeout(() => document.getElementById("bg-vertical-5-light-block").setAttribute("class", styles.bgLightBlock), 3500)

        document.getElementById("bg-vertical-6").setAttribute("class", `${styles.bgVertical} ${styles.bgVertical6}`)
        setTimeout(() => document.getElementById("bg-vertical-6-lights").setAttribute("class", styles.bgLights), 3500 + 30)
        setTimeout(() => document.getElementById("bg-vertical-6-light-block").setAttribute("class", styles.bgLightBlock), 3500)

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
    // const buttonHover = e => {
    //     let stuff = e.target
    //     console.log(stuff);
    //     if (e.target.id == "projects") {
    //         e.target.className = `${styles.projects} ${styles.hover} ${styles.hoverZoom}`
    //     } else if (e.target.id == "contact") {
    //         e.target.className = `${styles.contact} ${styles.hover} ${styles.hoverZoom}`
    //     } else if (e.target.id == "resume") {
    //         e.target.className = `${styles.resume} ${styles.hover} ${styles.hoverZoom}`
    //     }
    // }
    // --> BUTTON onMouseOut <--
    // const buttonOut = e => {
    //     if (e.target.id == "projects") {
    //         e.target.className = `${styles.projects} ${styles.hoverZoom} ${styles.float}`
    //     } else if (e.target.id == "contact") {
    //         e.target.className = `${styles.contact} ${styles.hoverZoom} ${styles.float}`
    //     } else if (e.target.id == "resume") {
    //         e.target.className = `${styles.resume} ${styles.hoverZoom} ${styles.float}`
    //     }
    // }

    // the lines the typewriter will write
    const dataText = ["Brian F. Gaudet", "  ", "Full Stack", "Web Developer"]

    useEffect(() => {
        // const script = document.createElement("script")
        // script.src = "../components/landingScript.js"
        // script.async = true
        // document.body.appendChild(script)
        // document.addEventListener('DOMContentLoaded', function (event) {

        // setCounter(0)
        
        if (loaded == false) {

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
                            document.getElementById("name").innerHTML = text.substring(0, i + 1)
                        } else {
                            // add next character to h1 w/ blinking cursor
                            document.getElementById("name").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>'
                        }
                    // check for empty SECOND WORD here
                    } else if (text.length == 2) {
                        if (i == text.length - 1) {
                            // add next character to h1 w/o blinking cursor
                            document.getElementById("line-two").innerHTML = text.substring(0, i + 1)
                        } else {
                            // add next character to h1 w/ blinking cursor
                            document.getElementById("line-two").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>'
                        }
                    // THIRD WORD
                    } else if (text.length == 10) {
                        if (i == text.length - 1) {
                            // add next character to line-two w/o blinking cursor
                            document.getElementById("line-three").innerHTML = text.substring(0, i + 1)
                        } else {
                            // add next character to line-two w/ blinking cursor
                            document.getElementById("line-three").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>'
                        }
                    // FOURTH WORD
                    } else if (text.length == 13) {
                        // if this is the last character in the FOURTH WORD, call FUNCTION TO DISPLAY BUTTONS
                        if (i == text.length - 1) {
                            // add next character to line-three w/ blinking cursor - **keep cursor blinking since this is the last line**
                            document.getElementById("line-four").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>'
                            // --> CALL FUNCTION TO DISPLAY BUTTONS: <--
                            setTimeout(displayButtons, 1000)
                            // delay, then call the function to display background
                            setTimeout(displayBackground, 3500)
                            // delay, then call the function to display socail links
                            setTimeout(displaySocial, 5000)
                            // delay, then call the function to display copyright and est. text
                            setTimeout(displayCopyright, 5200)
                        } else {
                            // add next character to line-three w/ blinking cursor
                            document.getElementById("line-four").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>'
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
                    return
                }
                console.log(counter);
                // check that we haven't hit the final (FOURTH) word in the array
                if (i < 5 && counter < 5) {
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
            setLoaded(!loaded)
        } else {
            displayButtons()
            displayBackground()
            displayCopyright()
            displaySocial()
        }
        // })
    }, [loaded])

    const typedLineClass = `${styles.typedLine} ${styles.line1}`
    const typedLineClassInvis = `${styles.typedLine} ${styles.line1} ${styles.invis}`
    
    // const unZoomProjects = `${styles.projects} ${styles.hoverZoom} ${styles.float}`
    // const zoomProjects = `${styles.projects} ${styles.hover} ${styles.hoverZoom}`

    // const unZoomContact = `${styles.contact} ${styles.hoverZoom} ${styles.float}`
    // const zoomContact = `${styles.contact} ${styles.hover} ${styles.hoverZoom}`

    // const unZoomResume = `${styles.resume} ${styles.hoverZoom} ${styles.float}`
    // const zoomResume = `${styles.resume} ${styles.hover} ${styles.hoverZoom}`
    
    return (
        <div id="background-image" className={styles.bg} >
            <div id="bg-horizontal"></div>
            <div id="bg-vertical-0">
                <div id="bg-vertical-0-light-block">
                    <div id="bg-vertical-0-lights"></div>
                </div>
            </div>
            <div id="bg-vertical-1">
                <div id="bg-vertical-1-light-block">
                    <div id="bg-vertical-1-lights"></div>
                </div>
            </div>
            <div id="bg-vertical-2">
                <div id="bg-vertical-2-light-block">
                    <div id="bg-vertical-2-lights"></div>
                </div>
            </div>
            <div id="bg-vertical-3">
                <div id="bg-vertical-3-light-block">
                    <div id="bg-vertical-3-lights"></div>
                </div>
            </div>
            <div id="bg-vertical-4">
                <div id="bg-vertical-4-light-block">
                    <div id="bg-vertical-4-lights"></div>
                </div>
            </div>
            <div id="bg-vertical-5">
                <div id="bg-vertical-5-light-block">
                    <div id="bg-vertical-5-lights"></div>
                </div>
            </div>
            <div id="bg-vertical-6">
                <div id="bg-vertical-6-light-block">
                    <div id="bg-vertical-6-lights"></div>
                </div>
            </div>
            <div className={styles.body}>
                {
                    (!loaded) ?
                        <div className={styles.typewriterDiv}>
                        <h1 id="name" className={typedLineClass}></h1>
                        <h3 id="line-two" className={typedLineClassInvis}></h3>
                        <h3 id="line-three" className={typedLineClass}></h3>
                        <h3 id="line-four" className={typedLineClass}></h3>
                        </div>
                    :
                        <div className={styles.typewriterDiv}>
                        <h1 id="name" className={typedLineClass}>{ dataText[0] }</h1>
                        <h3 id="line-two" className={typedLineClassInvis}>{ dataText[1] }</h3>
                        <h3 id="line-three" className={typedLineClass}>{ dataText[2] }</h3>
                        <h3 id="line-four" className={typedLineClass}>{ dataText[3] }</h3>
                        </div>
                }
                <div id="display-buttons" className={styles.buttonContainer}>
                    {/* Projects Button */}
                    <div id="" className={styles.button}>
                        <a id="projects" href="/projects" className="" >
                            <div className={styles.mask}></div>
                        </a>
                        <div id="projects-label" className=""></div>
                    </div>
                    {/* Contact Button */}
                    <div className={styles.button}>
                        <a id="contact" href="#" className="" >
                            <div className={styles.mask}></div>
                        </a>
                        <div id="contact-label" className=""></div>
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
                        <a id="resume" href="/resume" className="" >
                            <div className={styles.mask}></div>
                        </a>
                        <div id="resumeLabel" className=""></div>
                    </div>

                </div>
            </div>
            {/* <script type="text/javascript" src="/src/components/landingScript.js"></script> */}
        </div>
    )
}

export default Landing