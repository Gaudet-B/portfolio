import { useEffect, useState } from 'react'
import styles from '../components/carousel.style.module.css'


const CustomCarousel = () => {

    // import classnames utility --> https://github.com/JedWatson/classnames //
    const classNames = require("classnames")

    // starting agles for carousel rotation
    const [leftAngle, setLeftAngle] = useState(90)
    const [rightAngle, setRightAngle] = useState(-90)

    // starting booleans for card flipping
    const [isFlippedOne, setIsFlippedOne] = useState(false)
    const [isFlippedTwo, setIsFlippedTwo] = useState(false)
    const [isFlippedThree, setIsFlippedThree] = useState(false)
    const [isFlippedFour, setIsFlippedFour] = useState(false)

    // function to flip cards
    const flipCard = num => {
        
        let card = document.getElementById(`card-${num}`)

        // card #1
        if (num == "one") {

            if (!isFlippedOne) {
                cardOne.push(styles.flip)
                card.setAttribute("class", classNames(cardOne))
                frontFlip(num)
                setIsFlippedOne(!isFlippedOne)

            } else if (isFlippedOne) {
                cardOne.push(styles.reverse)
                card.setAttribute("class", classNames(cardOne))
                backFlip(num)
                setIsFlippedOne(!isFlippedOne)
            }

        // card #2
        } else if (num == "two") {

            if (!isFlippedTwo) {
                cardTwo.push(styles.flip)
                card.setAttribute("class", classNames(cardTwo))
                frontFlip(num)
                setIsFlippedTwo(!isFlippedTwo)

            } else if (isFlippedTwo) {
                cardTwo.push(styles.reverse)
                card.setAttribute("class", classNames(cardTwo))
                backFlip(num)
                setIsFlippedTwo(!isFlippedTwo)
            }

        // card #3
        } else if (num == "three") {

            if (!isFlippedThree) {
                cardThree.push(styles.flip)
                card.setAttribute("class", classNames(cardThree))
                frontFlip(num)
                setIsFlippedThree(!isFlippedThree)

            } else if (isFlippedThree) {
                cardThree.push(styles.reverse)
                card.setAttribute("class", classNames(cardThree))
                backFlip(num)
                setIsFlippedThree(!isFlippedThree)
            }

        // card #4
        } else if (num == "four") {

            if (!isFlippedFour) {
                cardFour.push(styles.flip)
                card.setAttribute("class", classNames(cardFour))
                frontFlip(num)
                setIsFlippedFour(!isFlippedFour)

            } else if (isFlippedFour) {
                cardFour.push(styles.reverse)
                card.setAttribute("class", classNames(cardFour))
                backFlip(num)
                setIsFlippedFour(!isFlippedFour)
            }
        }
    }

    // function to swap content front -> back
    const frontFlip = (num) => {

        let newBack = document.getElementById(`card-${num}-front`)
        let backHtml = newBack.innerHTML

        let newFront = document.getElementById(`card-${num}-back`)
        let frontHtml = newFront.innerHTML

        setTimeout(() => {newBack.innerHTML = ""}, 500)
        setTimeout(() => {newFront.innerHTML = ""}, 400)

        setTimeout(() => {newBack.innerHTML = frontHtml}, 800)
        setTimeout(() => {newFront.innerHTML = backHtml}, 900)
    }

    // function to swap content back -> front 
    const backFlip = (num) => {

        let newFront = document.getElementById(`card-${num}-front`)
        let frontHtml = newFront.innerHTML
        
        let newBack = document.getElementById(`card-${num}-back`)
        let backHtml = newBack.innerHTML

        newBack.innerHTML = ""
        setTimeout(() => {newFront.innerHTML = ""}, 400)
        // setTimeout(() => {newBack.innerHTML = ""}, 10)

        setTimeout(() => {newFront.innerHTML = backHtml}, 700)
        setTimeout(() => {newBack.innerHTML = frontHtml}, 750)
    }

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

    var cardOne = [styles.card, styles.cardOne]
    var cardTwo = [styles.card, styles.cardTwo]
    var cardThree = [styles.card, styles.cardThree]
    var cardFour = [styles.card, styles.cardFour]

    var cardOneClass = classNames(cardOne)
    var cardTwoClass = classNames(cardTwo)
    var cardThreeClass = classNames(cardThree)
    var cardFourClass = classNames(cardFour)

    var cardDivOne = `${styles.cardDiv} ${styles.cardOneDiv}`
    var cardDivTwo = `${styles.cardDiv} ${styles.cardTwoDiv}`
    var cardDivThree = `${styles.cardDiv} ${styles.cardThreeDiv}`
    var cardDivFour = `${styles.cardDiv} ${styles.cardFourDiv}`

    return (
        <div className={styles.container}>
            <base  href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/wanaka-tree.jpg"/>
            <div id="carousel" className={styles.carousel}>
                <figure id="spinner" className={styles.spinner}>
                    <div className={cardDivOne}>
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
                    </div>
                    <div className={cardDivTwo}>
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
                    </div>
                    <div className={cardDivThree}>
                        <figure id="card-three" className={cardThreeClass} onClick={() => flipCard("three")}>
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
                    <div className={cardDivFour}>
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
                    </div>
                </figure>
            </div>
            <div id="spanLeft" className={styles.span} style={{ float: "left" }} onClick={spin}>&lt;</div>
            <div id="spanRight" className={styles.span} style={{ float: "right" }} onClick={spin}>&gt;</div>
        </div>
    )
}

export default CustomCarousel
