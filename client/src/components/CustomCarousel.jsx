// import axios from 'axios'
import { useEffect, useState } from 'react'
import styles from '../components/carousel.style.module.css'
import CardBack from './CardBack'
import CardFront from './CardFront'
import project1img from '../assets/project_1.1_example.png'
import project2img from '../assets/project_2_example.png'


const CustomCarousel = props => {

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

    const [cardOneAngle, setCardOneAngle] = useState(180)
    const [cardTwoAngle, setCardTwoAngle] = useState(180)
    const [cardThreeAngle, setCardThreeAngle] = useState(180)
    const [cardFourAngle, setCardFourAngle] = useState(180)

    // pull projects array and images array from props
    const { projects, images } = props

    // function to flip cards
    const flipCard = num => {

        console.log(num)
        
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
        console.log("front")

        let card = document.getElementById(`card-${num}`)

        if (num == "one") {
            cardOne.push(styles.flip)
            card.setAttribute("class", classNames(cardOne))
        }
        if (num == "two") {
            cardTwo.push(styles.flip)
            card.setAttribute("class", classNames(cardTwo))
        }
        if (num == "three") {
            cardThree.push(styles.flip)
            card.setAttribute("class", classNames(cardThree))
        }
        if (num == "four") {
            cardFour.push(styles.flip)
            card.setAttribute("class", classNames(cardFour))
        }

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
        console.log("back")

        let card = document.getElementById(`card-${num}`)

        if (num == "one") {
            cardOne.push(styles.reverse)
            card.setAttribute("class", classNames(cardOne))
        }
        if (num == "two") {
            cardTwo.push(styles.reverse)
            card.setAttribute("class", classNames(cardTwo))
        }
        if (num == "three") {
            cardThree.push(styles.reverse)
            card.setAttribute("class", classNames(cardThree))
        }
        if (num == "four") {
            cardFour.push(styles.reverse)
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
    }

    // function to rotate the carousel
    const spin = e => {
        let spinner = document.getElementById("spinner");
        let id = e.target.id
        if (id == "spanLeft") {
            setLeftAngle(leftAngle + 90)
            setRightAngle(rightAngle + 90)
            spinner.setAttribute("style", `-webkit-transform: rotateY(${leftAngle}deg); -moz-transform: rotateY(${leftAngle}deg); transform: rotateY(${leftAngle}deg);`)
        } else {
            setRightAngle(rightAngle - 90)
            setLeftAngle(leftAngle - 90)
            spinner.setAttribute("style", `-webkit-transform: rotateY(${rightAngle}deg); -moz-transform: rotateY(${rightAngle}deg); transform: rotateY(${rightAngle}deg);`)
        }
    }

    // refactor card flipping to JS

    var leftFlip = 0
    var rightFlip = 0

    const frontFlip2 = num => {

        let card = document.getElementById(`card-${num}`)
        // let front = document.getElementById(`card-${num}-front`)
        // let back = document.getElementById(`card-${num}-front`)

        // leftFlip += 180
        // let rotate = leftFlip

        // card.setAttribute("style", `-webkit-transform: rotateY(${rotate}deg); -moz-transform: rotateY(${rotate}deg); transform: rotateY(${rotate}deg);`)
        // front.setAttribute("class", `-webkit-transform: rotateY(${180}deg); -moz-transform: rotateY(${180}deg); transform: rotateY(${180}deg);`)
        // back.setAttribute("class", `-webkit-transform: rotateY(${180}deg); -moz-transform: rotateY(${180}deg); transform: rotateY(${180}deg);`)
        
        if (num === "one") {
            setCardOneAngle(cardOneAngle + 180)
            let angle = cardOneAngle
            card.setAttribute("style", `-webkit-transform: rotateY(${angle}deg); -moz-transform: angleY(${angle}deg); transform: rotateY(${angle}deg);`)
        }
        if (num === "two") {
            setCardTwoAngle(cardTwoAngle + 180)
            let angle = cardTwoAngle
            card.setAttribute("style", `-webkit-transform: rotateY(${angle}deg); -moz-transform: angleY(${angle}deg); transform: rotateY(${angle}deg);`)
        }
        if (num === "three") {
            setCardThreeAngle(cardThreeAngle + 180)
            let angle = cardThreeAngle
            card.setAttribute("style", `-webkit-transform: rotateY(${angle}deg); -moz-transform: angleY(${angle}deg); transform: rotateY(${angle}deg);`)
        }
        if (num === "four") {
            setCardFourAngle(cardFourAngle + 180)
            let angle = cardFourAngle
            card.setAttribute("style", `-webkit-transform: rotateY(${angle}deg); -moz-transform: angleY(${angle}deg); transform: rotateY(${angle}deg);`)
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

    var leftArrow = classNames([styles.span, styles.spanLeft])
    var rightArrow = classNames([styles.span, styles.spanRight])

    return (
        <div className={styles.container}>
            {/* <base  href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/wanaka-tree.jpg"/> */}
            <div id="carousel" className={styles.carousel}>
                <figure id="spinner" className={styles.spinner}>
                    <div className={cardDivOne} >
                        <figure id="card-one" className={styles.flipper} >
                            <figure className={cardOneClass} >
                                <div id="left" className={styles.left}></div>
                                <div id="right" className={styles.right}></div>
                                <div id="card-one-back" className={styles.cardBack}>
                                    <CardBack flipCard={frontFlip2} flip={"one"} project={projects[0]} images={images.draft} />
                                    {/* <div id="mask">
                                        <h4>PROJECT TITLE</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt commodi facilis repellat? Illum soluta delectus ipsa, sapiente mollitia fugiat quas expedita similique nobis ullam at sit suscipit voluptate pariatur labore.</p>
                                        <p>Stuff, stuff, stuff</p>
                                    </div> */}
                                </div>
                                <div id="card-one-front" className={styles.cardFront}>
                                    <CardFront flipCard={frontFlip2} flip={"one"} project = {projects[0]} />
                                    {/* <div id="mask">
                                        <img src="wanaka-tree.jpg" alt="placeholder" />
                                        <h4>Technologies used, etc, etc</h4>
                                        <p>Short summary of the project</p>
                                        <p>with full details on back (and github)</p>
                                    </div> */}
                                </div>
                            </figure>
                        </figure>
                    </div>
                    <div className={cardDivTwo}>
                        <figure id="card-two" className={styles.flipper} >
                            <figure className={cardTwoClass} >
                                <div id="left" className={styles.left}></div>
                                <div id="right" className={styles.right}></div>
                                <div id="card-two-back" className={styles.cardBack}>
                                    <CardBack flipCard={frontFlip2} flip={"two"} project={projects[1]} images={images.pizza} />
                                </div>
                                <div id="card-two-front" className={styles.cardFront}>
                                    <CardFront flipCard={frontFlip2} flip={"two"} project = {projects[1]} />
                                </div>
                            </figure>
                        </figure>
                    </div>
                    <div className={cardDivThree}>
                        <figure id="card-three" className={styles.flipper} >
                            <figure className={cardThreeClass} >
                                <div id="left" className={styles.left}></div>
                                <div id="right" className={styles.right}></div>
                                <div id="card-three-back" className={styles.cardBack}>
                                    <CardBack flipCard={frontFlip2} flip={"three"} project={projects[2]} images={images.myth} />
                                </div>
                                <div id="card-three-front" className={styles.cardFront}>
                                    <CardFront flipCard={frontFlip2} flip={"three"} project = {projects[2]} />
                                </div>
                            </figure>
                        </figure>
                    </div>
                    <div className={cardDivFour}>
                        <figure id="card-four" className={styles.flipper} >
                            <figure className={cardFourClass} >
                                <div id="left" className={styles.left}></div>
                                <div id="right" className={styles.right}></div>
                                <div id="card-four-back" className={styles.cardBack}>
                                    <CardBack flipCard={frontFlip2} flip={"four"} project={projects[3]} images={images.portfolio} />
                                </div>
                                <div id="card-four-front" className={styles.cardFront}>
                                    <CardFront flipCard={frontFlip2} flip={"four"} project = {projects[3]} />
                                </div>
                            </figure>
                        </figure>
                    </div>
                </figure>
            </div>
            <div id="spanLeft" className={leftArrow}  onClick={spin}>&lt;</div>
            <div id="spanRight" className={rightArrow}  onClick={spin}>&gt;</div>
        </div>
    )
}

export default CustomCarousel
