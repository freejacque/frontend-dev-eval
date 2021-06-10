import styled from 'styled-components'
import {
    ChallengeHeading,
    ChallengeWrapper,
    Description
} from './Elements'
import a from './a.jpg'

const Challenge1 = () => {
    return (
        <ChallengeWrapper>
            <ChallengeHeading>Challenge 1</ChallengeHeading>
            <Description>Style SingleDiv to look like the image.</Description>
            <div><img src={a} width={100} height="auto" alt=""/><SingleDiv/></div>
        </ChallengeWrapper>
    )
}

const SingleDiv = styled.div`
  background-color: red;
  width: 5px;
  height: 5px;
`

export default Challenge1