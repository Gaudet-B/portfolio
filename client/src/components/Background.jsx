import { useEffect } from 'react'
import styles from './background.style.module.css'

const Background = () => {

    useEffect(() => {
        setTimeout(() => displayBackground(), 1000);
    })

    const displayBackground = () => {

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
        
    }


    return (
        <div id="background-image" className={styles.bg}>
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
        </div>
    )
}

export default Background
