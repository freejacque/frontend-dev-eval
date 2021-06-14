import { useState } from 'react'
import Challenge1 from './Challenge1'
import Challenge2 from './Challenge2'
import Challenge3 from './Challenge3'
import Challenge4 from './Challenge4'
import {
    AppWrapper,
    Frame,
    Title
}                 from './Elements'

function App() {

    // set initial count values
    const [Count1, setC1] = useState(0);
    const [Count2, setC2] = useState(0);
    const [Count3, setC3] = useState(0);

    /**
     * Increments the counts for each component
     */
    function increment(num) {
        switch (num) {
            case 1:
                setC1(Count1 =>Count1 + 1);
                break;
            case 2:
                setC2(Count2 => Count2 + 1);
                break;
            case 3:
                setC3(Count3 => Count3 + 1);
                break;
        }
    }

    /**
     * The increment function is passed to Challenges 1-3
     * The count values for Challenges 1-3 are passed to Challenge 4
     */
    return (
        <AppWrapper>
            <Title>Front-End Dev Evaluation</Title>
            <Frame>
                <Challenge1 increment={increment} />
                <Challenge2 increment={increment} />
                <Challenge3 increment={increment} />
                <Challenge4 C1={Count1} C2={Count2} C3={Count3} />
            </Frame>
        </AppWrapper>
    );
}

export default App;