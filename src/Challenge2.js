import styled from 'styled-components'
import {
    ChallengeHeading,
    ChallengeWrapper,
    Description
}             from './Elements'

const Challenge2 = () => {
    return (
        <ChallengeWrapper>
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
`

const Earth = styled.div`
  background-color: blue;
  height: 150px;
  width: 150px;
  border-radius: 150px;
`

export default Challenge2