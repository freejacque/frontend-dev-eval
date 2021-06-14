import {
    ChallengeHeading,
    ChallengeWrapper,
    Description
} from './Elements'

import DisplayWindowSize from './DisplayWindowSize'

const Challenge3 = ({ increment }) => {
    return (
        <ChallengeWrapper onClick={() => increment(3)}>
            <ChallengeHeading>Challenge 3</ChallengeHeading>
            <Description>Report the window dimensions. This should update when the window size is changed.</Description>
            <DisplayWindowSize/>
        </ChallengeWrapper>
    )
}

export default Challenge3