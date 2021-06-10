import {
    ChallengeHeading,
    ChallengeWrapper,
    Description
} from './Elements'

const Challenge4 = () => {
    return (
        <ChallengeWrapper>
            <ChallengeHeading>Challenge 4</ChallengeHeading>
            <Description>
                Make challenges 1-3 record the number of times each is clicked and report the numbers here, formatted
                cleanly.
            </Description>
            <div>
                <div>C1: #</div>
                <div>C2: #</div>
                <div>C3: #</div>
                <div>Total: #</div>
            </div>
        </ChallengeWrapper>
    )
}

export default Challenge4