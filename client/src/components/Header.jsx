
import styles from '../components/projects.style.module.css'


const Header = props => {

    // import classnames utility --> https://github.com/JedWatson/classnames //
    const classNames = require("classnames")

    const {title, left, right, showLanding, setShowLanding, showProjects, setShowProjects, showContact, setShowContact, showResume, setShowResume} = props

    const handleLeft = () => {
        if (left == "HOME") {
            setShowLanding(true)
        } else if (left == "CONTACT") {
            setShowContact(true)
        } else if (left == "PROJECTS") {
            setShowProjects(true)
        } else if (left == "RESUME") {
            setShowResume(true)
        }
    }
    const handleRight = () => {
        if (right == "HOME") {
            setShowLanding(true)
        } else if (right == "CONTACT") {
            setShowContact(true)
        } else if (right == "PROJECTS") {
            setShowProjects(true)
        } else if (right == "RESUME") {
            setShowResume(true)
        }
    }

    // const leftStyle = classNames("nav left")
    // const rightStyle = classNames("nav right")

    return (
        <div className={styles.mainContainer}>
            <a id="left"classname={styles.nav} onClick={handleLeft} > &lt; { left } </a>
            <h2 id="title" classname={styles.title}>{ title }</h2>
            <a id="right" classname={styles.nav} onClick={handleRight} > { right } &gt; </a>
        </div>
    )
}

export default Header
