import styled from 'styled-components'
import {
    ChallengeHeading,
    ChallengeWrapper,
    Description
}             from './Elements'

const Challenge2 = ({ increment }) => {
    return (
        <ChallengeWrapper onClick={() => increment(2)}>
            <ChallengeHeading>Challenge 2</ChallengeHeading>
            <Description>Make the Moon orbit the Earth.</Description>
            <div>
                <Earth/>
                <Moon/>
            </div>
        </ChallengeWrapper>
    )
}

const Moon = styled.div`
    background-color: gray;
    height: 30px;
    width: 30px;
    border-radius: 30px;
    position: relative;
    top: 50%;
    left: 50%;
    margin-top: -9em;
    margin-right: -3em;
    -webkit-animation: orbit 4s linear infinite; /* Chrome,Safari 5 */
    -moz-animation: orbit 4s linear infinite; /* Firefox 5-15 */
    -o-animation: orbit 4s linear infinite; /* Opera 12+ */
    animation: orbit 4s linear infinite; /* Chrome,Firefox 16+,IE 10+,Safari 5 */

    @-webkit-keyframes orbit {
        from {  -webkit-transform: rotate(0deg) translateX(150px) rotate(0deg); }
        to   {  -webkit-transform: rotate(360deg) translateX(150px) rotate(-360deg); }
    }

    @-moz-keyframes orbit {
        from {  -moz-transform: rotate(0deg) translateX(150px) rotate(0deg); }
        to   {  -moz-transform: rotate(360deg) translateX(150px) rotate(-360deg); }
    }

    @-o-keyframes orbit {
        from {  -o-transform: rotate(0deg) translateX(150px) rotate(0deg); }
        to   {  -o-transform: rotate(360deg) translateX(150px) rotate(-360deg); }
    }

    @keyframes orbit {
        from { transform: rotate(0deg) translateX(150px) rotate(0deg); }
        to   { transform: rotate(360deg) translateX(150px) rotate(-360deg); }
    }
`

const Earth = styled.div`
    background-color: blue;
    height: 150px;
    width: 150px;
    border-radius: 150px;
    margin: 4em auto;
`

export default Challenge2