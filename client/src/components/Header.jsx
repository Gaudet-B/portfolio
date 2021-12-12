
import styles from '../components/header.style.module.css'


const Header = props => {

    // import classnames utility --> https://github.com/JedWatson/classnames //
    const classNames = require("classnames")

    const {left, right, windowWidth} = props

    // const handleLeft = () => {
    //     if (left == "HOME") {
    //         setShowLanding(true)
    //     } else if (left == "CONTACT") {
    //         setShowContact(true)
    //     } else if (left == "PROJECTS") {
    //         setShowProjects(true)
    //     } else if (left == "RESUME") {
    //         setShowResume(true)
    //     }
    // }
    // const handleRight = () => {
    //     if (right == "HOME") {
    //         setShowLanding(true)
    //     } else if (right == "CONTACT") {
    //         setShowContact(true)
    //     } else if (right == "PROJECTS") {
    //         setShowProjects(true)
    //     } else if (right == "RESUME") {
    //         setShowResume(true)
    //     }
    // }

    var leftLink, rightLink

    if (left == "HOME") {
        leftLink = "/"
    } else {
        leftLink = left.toLowerCase()
    }

    if (right == "HOME") {
        rightLink = "/"
    } else {
        rightLink = right.toLowerCase()
    }

    // const leftStyle = classNames("nav left")
    // const rightStyle = classNames("nav right")

    return (
        <div className={(windowWidth > 800) ? styles.mainContainer : (windowWidth < 375) ? styles.smallContainer : styles.responsiveContainer} style={{ width: `${windowWidth * .9}px` }}>
            <a href={leftLink} id="left" className={(windowWidth > 800) ? styles.nav : (windowWidth < 375) ? styles.smallNav : styles.responsiveNav}> &lt; { left }<span aria-hidden="true"></span> </a>
            <a href={rightLink} id="right" className={(windowWidth > 800) ? styles.nav : (windowWidth < 375) ? styles.smallNav : styles.responsiveNav}> { right }<span aria-hidden="true"></span> &gt; </a>
        </div>
    )
}

export default Header
