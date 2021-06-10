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
    return (
        <AppWrapper>
            <Title>Front-End Dev Evaluation</Title>
            <Frame>
                <Challenge1/>
                <Challenge2/>
                <Challenge3/>
                <Challenge4/>
            </Frame>
        </AppWrapper>
    );
}

export default App;
