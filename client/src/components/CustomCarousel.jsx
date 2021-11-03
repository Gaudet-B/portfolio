import { useEffect, useState } from 'react'
import styles from '../components/carousel.module.css'
// import flipCard from './flipCard'
// import spin from './spin.js'

const CustomCarousel = () => {

    const classNames = require("classnames")
    const [leftAngle, setLeftAngle] = useState(90)
    const [rightAngle, setRightAngle] = useState(-90)
    const [isFlipped, setIsFlipped] = useState(false)

    // useEffect(() => {
    //     const flipScript = document.createElement("script")
    //     flipScript.src = "/client/src/components/flipCard.js"
    //     flipScript.async = true
    //     document.body.appendChild(flipScript)

    //     const spinScript = document.createElement("script")
    //     spinScript.src = "/client/src/components/spin.js"
    //     spinScript.async = true
    //     document.appendChild(spinScript)

    //     return () => {
    //         document.body.removeChild(flipScript)
    //         document.body.removeChild(spinScript)
    //     }
    // }, [])


    // var isFlipped = false
    const flipCard = num => {
        console.log(num)
        console.log(`card-${num}-front`)
        if (isFlipped == false) {
            let card = document.getElementById(`card-${num}`)
            if (num == "one") {
                cardOne.push(styles.flipOne)
                // console.log(cardOne)
                // console.log(cardOneClass)
                card.setAttribute("class", classNames(cardOne))
                // console.log(card.className)
            } else if (num == "two") {
                cardTwo.push(styles.flipTwo)
                card.setAttribute("class", classNames(cardTwo))
            } else if (num == "three") {
                cardThree.push(styles.flipThree)
                card.setAttribute("class", classNames(cardThree))
            } else if (num == "four") {
                cardFour.push(styles.flipFour)
                card.setAttribute("class", classNames(cardFour))
            }

            // if (num == "one") {
                let newBack = document.getElementById(`card-${num}-front`)
                let backHtml = newBack.innerHTML

                let newFront = document.getElementById(`card-${num}-back`)
                let frontHtml = newFront.innerHTML

                setTimeout(() => {newBack.innerHTML = ""}, 500)
                setTimeout(() => {newFront.innerHTML = ""}, 400)

                setTimeout(() => {newBack.innerHTML = frontHtml}, 800)
                setTimeout(() => {newFront.innerHTML = backHtml}, 1500)
                // newBack.setAttribute("class", `${styles.mask} ${styles.cardBack}`)
                
                // newFront.innerHTML = ""
                // setTimeout(() => {newFront.innerHTML = frontHtml}, 1500);
                // newFront.setAttribute("class", `${styles.mask} ${styles.cardFront}`)

                // setTimeout(() => {
                //     newFront.setAttribute("class", styles.cardFront)
                //     newBack.setAttribute("class", styles.cardBack)
                // }, 1500);
            // } 
            // else if (num == "two") {
                // let newBack = document.getElementById("card-two-front")
                // let newFront = document.getElementById("card-two-back")
                // newFront.setAttribute("class", "card")
                // newBack.setAttribute("class", "mask cardBack")
                // setTimeout(() => {
                //     newFront.setAttribute("class", "card")
                //     newBack.setAttribute("class", "cardBack")
                // }, 1500);
            // } 
            // else if (num == "three") {
                // let newBack = document.getElementById("card-three-front")
                // let newFront = document.getElementById("card-three-back")
                // newFront.setAttribute("class", "card")
                // newBack.setAttribute("class", "mask cardBack")
                // setTimeout(() => {
                //     newFront.setAttribute("class", "card")
                //     newBack.setAttribute("class", "cardBack")
                // }, 1500);
            // } 
            // else if (num == "four") {
                // let newBack = document.getElementById("card-four-front")
                // let newFront = document.getElementById("card-four-back")
                // newFront.setAttribute("class", "card")
                // newBack.setAttribute("class", "mask cardBack")
                // setTimeout(() => {
                //     newFront.setAttribute("class", "card")
                //     newBack.setAttribute("class", "cardBack")
                // }, 1500);
            // }
            // let mask1 = newFront.firstElementChild
            // let mask2 = newBack.firstElementChild
            
            // console.log(isFlipped)
            setIsFlipped(!isFlipped)
            // console.log(isFlipped)
            // console.log(`FRONT ${newFront}`)
            // console.log(`BACK ${newBack}`)
            // newFront.setAttribute("class", "card")
            // mask1.setAttribute("class", "mask")
            // newBack.setAttribute("class", "mask cardBack")
            // mask2.setAttribute("class", "mask")
            // setTimeout(() => {
            //     newFront.setAttribute("class", "card")
            //     newBack.setAttribute("class", "cardBack")
            // }, 1500);
            // newFront.setAttribute("class", "card")
            // newBack.setAttribute("class", "cardBack")
        } else if (isFlipped == true) {

            let card = document.getElementById(`card-${num}`)
            if (num == "one") {
                cardOne.push(styles.reverseOne)
                // console.log(cardOne)
                // console.log(cardOneClass)
                card.setAttribute("class", classNames(cardOne))
                // console.log(card.className)
            } else if (num == "two") {
                cardTwo.push(styles.reverseTwo)
                card.setAttribute("class", classNames(cardTwo))
            } else if (num == "three") {
                cardThree.push(styles.reverseThree)
                card.setAttribute("class", classNames(cardThree))
            } else if (num == "four") {
                cardFour.push(styles.reverseFour)
                card.setAttribute("class", classNames(cardFour))
            }

            let newFront = document.getElementById(`card-${num}-front`)
            let frontHtml = newFront.innerHTML
            
            let newBack = document.getElementById(`card-${num}-back`)
            let backHtml = newBack.innerHTML

            newBack.innerHTML = ""
            setTimeout(() => {newFront.innerHTML = ""}, 400)
            // setTimeout(() => {newBack.innerHTML = ""}, 10)

            setTimeout(() => {newFront.innerHTML = backHtml}, 700)
            setTimeout(() => {newBack.innerHTML = frontHtml}, 750)

            setIsFlipped(!isFlipped)
            
        }
    }

    // var angle = 0;
    const spin = e => {
        let spinner = document.getElementById("spinner");
        let id = e.target.id
        if (id == "spanLeft") {
            setLeftAngle(leftAngle + 90)
            setRightAngle(rightAngle + 90)
            console.log("left - " + leftAngle)
            console.log(spinner.style)
            spinner.setAttribute("style", `-webkit-transform: rotateY(${leftAngle}deg); -moz-transform: rotateY(${leftAngle}deg); transform: rotateY(${leftAngle}deg);`)
        } else {
            setRightAngle(rightAngle - 90)
            setLeftAngle(leftAngle - 90)
            console.log("right - " + rightAngle)
            console.log(spinner.style)
            spinner.setAttribute("style", `-webkit-transform: rotateY(${rightAngle}deg); -moz-transform: rotateY(${rightAngle}deg); transform: rotateY(${rightAngle}deg);`)
        }
    }

    // const cardOne = `${styles.card} ${styles.cardOne}`
    // const cardTwo = `${styles.card} ${styles.cardTwo}`
    // const cardThree = `${styles.card} ${styles.cardThree}`
    // const cardFour = `${styles.card} ${styles.cardFour}`

    var cardOne = [styles.card, styles.cardOne]
    var cardTwo = [styles.card, styles.cardTwo]
    var cardThree = [styles.card, styles.cardThreeDiv]      // <--- **DON'T FORGET THIS MODIFICATION** //
    var cardFour = [styles.card, styles.cardFour]

    var cardOneClass = classNames(cardOne)
    var cardTwoClass = classNames(cardTwo)
    var cardThreeClass = classNames(cardThree)
    var cardFourClass = classNames(cardFour)

    return (
        <div className={styles.container}>
            {/* <link rel="stylesheet" href="/client/src/components/carousel.module.css"/> */}
            <base  href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/wanaka-tree.jpg"/>
            <div id="carousel" className={styles.carousel}>
                <figure id="spinner" className={styles.spinner}>
                    <figure id="card-one" className={cardOneClass} onClick={() => flipCard("one")}>
                        <div id="left" className={styles.left}></div>
                        <div id="right" className={styles.right}></div>
                        <div id="card-one-back" className={styles.cardBack}>
                            <div id="mask">
                                <h4>PROJECT TITLE</h4>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt commodi facilis repellat? Illum soluta delectus ipsa, sapiente mollitia fugiat quas expedita similique nobis ullam at sit suscipit voluptate pariatur labore.</p>
                                <p>Stuff, stuff, stuff</p>
                            </div>
                        </div>
                        <div id="card-one-front" className={styles.cardFront}>
                            <div id="mask">
                                <img src="wanaka-tree.jpg" alt="placeholder" />
                                <h4>Technologies used, etc, etc</h4>
                                <p>Short summary of the project</p>
                                <p>with full details on back (and github)</p>
                            </div>
                        </div>
                    </figure>
                    <figure id="card-two" className={cardTwoClass} onClick={() => flipCard("two")}>
                        <div id="left" className={styles.left}></div>
                        <div id="right" className={styles.right}></div>
                        <div id="card-two-back" className={styles.cardBack}>
                            <div id="mask">
                                <h4>PROJECT TITLE</h4>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt commodi facilis repellat? Illum soluta delectus ipsa, sapiente mollitia fugiat quas expedita similique nobis ullam at sit suscipit voluptate pariatur labore.</p>
                                <p>Stuff, stuff, stuff</p>
                            </div>
                        </div>
                        <div id="card-two-front" className={styles.cardFront}>
                            <div id="mask">
                                <img src="still-lake.jpg" alt="placeholder" />
                                <h4>Technologies used, etc, etc</h4>
                                <p>Short summary of the project</p>
                                <p>with full details on back (and github)</p>
                            </div>
                        </div>
                    </figure>
                    <div className={cardThreeClass}>
                    <figure id="card-three" className={styles.cardThree} onClick={() => flipCard("three")}>
                        <div id="left" className={styles.left}></div>
                        <div id="right" className={styles.right}></div>
                        <div id="card-three-back" className={styles.cardBack}>
                            <div id="mask">
                                <h4>PROJECT TITLE</h4>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt commodi facilis repellat? Illum soluta delectus ipsa, sapiente mollitia fugiat quas expedita similique nobis ullam at sit suscipit voluptate pariatur labore.</p>
                                <p>Stuff, stuff, stuff</p>
                            </div>
                        </div>
                        <div id="card-three-front" className={styles.cardFront}>
                            <div id="mask">
                                <img src="pink-milford-sound.jpg" alt="placeholder" />
                                <h4>Technologies used, etc, etc</h4>
                                <p>Short summary of the project</p>
                                <p>with full details on back (and github)</p>
                            </div>
                        </div>
                    </figure>
                    </div>
                    <figure id="card-four" className={cardFourClass} onClick={() => flipCard("four")}>
                        <div id="left" className={styles.left}></div>
                        <div id="right" className={styles.right}></div>
                        <div id="card-four-back" className={styles.cardBack}>
                            <div id="mask">
                                <h4>PROJECT TITLE</h4>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt commodi facilis repellat? Illum soluta delectus ipsa, sapiente mollitia fugiat quas expedita similique nobis ullam at sit suscipit voluptate pariatur labore.</p>
                                <p>Stuff, stuff, stuff</p>
                            </div>
                        </div>
                        <div id="card-four-front" className={styles.cardFront}>
                            <div id="mask">
                                <img src="paradise.jpg" alt="placeholder" />
                                <h4>Technologies used, etc, etc</h4>
                                <p>Short summary of the project</p>
                                <p>with full details on back (and github)</p>
                            </div>
                        </div>
                    </figure>
                </figure>
            </div>
            <div id="spanLeft" className={styles.span} style={{ float: "left" }} onClick={spin}>&lt;</div>
            <div id="spanRight" className={styles.span} style={{ float: "right" }} onClick={spin}>&gt;</div>
        </div>
    )
}

export default CustomCarousel
