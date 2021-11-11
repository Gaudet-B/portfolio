
import styles from '../components/header.style.module.css'


const Header = props => {

    // import classnames utility --> https://github.com/JedWatson/classnames //
    const classNames = require("classnames")

    const {left, right} = props

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
        <div className={styles.mainContainer}>
            <a href={leftLink} id="left" className={styles.nav}> &lt; { left } </a>
            <a href={rightLink} id="right" className={styles.nav}> { right } &gt; </a>
        </div>
    )
}

export default Header
