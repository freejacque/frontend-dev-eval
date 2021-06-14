import styled from 'styled-components'
import a      from './a.jpg'
import {
    ChallengeHeading,
    ChallengeWrapper,
    Description
}             from './Elements'

const Challenge1 = ({ increment }) => {
    return (
        <ChallengeWrapper onClick={() => increment(1)}>
            <ChallengeHeading>Challenge 1</ChallengeHeading>
            <Description>Style SingleDiv to look like the image. (Doesn't have to be pixel-perfect.)</Description>
            <div>
                <img src={a} width={100} height="auto" alt=""/>
                <SingleDiv/>
            </div>
        </ChallengeWrapper>
    )
}

const SingleDiv = styled.div`
    background-color: black;
    clip-path: polygon(
        35% 0, 0 100%, 30% 100%, 50% 35%,
        70% 100%, 75% 65%, 25% 64%, 25% 85%,
        65% 85%, 69% 100%, 85% 100%, 100% 100%, 65% 0);
    height: 8em;
    position: relative;
    width: 6em;
    &::before {
        background-color: white;
        bottom: 0;
        clip-path: polygon(
            35% 0, 0 100%, 26% 100%, 50% 29%,
            75% 100%, 85% 67%, 25% 67%, 25% 85%,
            68% 85%, 73% 100%, 80% 100%, 100% 100%, 65% 0);
        content: '';
        height: 97%;
        left: 0;
        margin: auto;
        position: absolute;
        right: 0;
        top: 0;
        width: 94%;
    }
`

export default Challenge1