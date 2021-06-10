import {
    ChallengeHeading,
    ChallengeWrapper,
    Description
} from './Elements'

const Challenge3 = () => {
    return (
        <ChallengeWrapper>
            <ChallengeHeading>Challenge 3</ChallengeHeading>
            <Description>Report the window dimensions. This should update when the window size is changed.</Description>
            <div>
                <div>Width: {window.innerWidth}px</div>
                <div>Height: {window.innerHeight}px</div>
            </div>
        </ChallengeWrapper>
    )
}

export default Challenge3