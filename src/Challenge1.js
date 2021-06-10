import styled from 'styled-components'
import a      from './a.jpg'
import {
    ChallengeHeading,
    ChallengeWrapper,
    Description
}             from './Elements'

const Challenge1 = () => {
    return (
        <ChallengeWrapper>
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
  background-color: red;
  width: 5px;
  height: 5px;
`

export default Challenge1