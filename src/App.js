import Content from './components/Content/Content';
import Header from './components/Header/Header';
import { StyledContainer } from './components/styles/Container.styles';
import {LayoutProvider} from './context/AnimatedLayoutContext';

function App() {
  return (
    <LayoutProvider>
      <StyledContainer>
        <Header />
        <Content />
      </StyledContainer>
    </LayoutProvider>
  );
}

export default App;
