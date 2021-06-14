import {
    ChallengeHeading,
    ChallengeWrapper,
    Description
} from './Elements'
import Table from './Table';

const Challenge4 = ({ C1, C2, C3 }) => {
    const theadData = ['Name', 'Count'];
    const tbodyData = [
        ['Challenge 1', C1],
        ['Challenge 2', C2],
        ['Challenge 3', C3],
        ['Total', C1 + C2 + C3]
    ];

    return (
        <ChallengeWrapper>
            <ChallengeHeading>Challenge 4</ChallengeHeading>
            <Description>
                Make challenges 1-3 record the number of times each is clicked and report the numbers here, formatted
                cleanly.
            </Description>
            <div>
                <Table theadData={theadData} tbodyData={tbodyData} />
            </div>
        </ChallengeWrapper>
    )
}

export default Challenge4