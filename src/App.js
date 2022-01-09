import './App.scss';
import { IntroBlock, Navigation, PortfolioBody } from '@components/building-blocks';

const sections = [
  {
    label: 'Me',
    id: 'me',
  },
  {
    label: 'Priorities',
    id: 'priorities'
  },
  {
    label: 'Projects',
    id: 'projects',
  },
  {
    label: 'Skills',
    id: 'skills',
  },
];

function App() {
  return (
    <>
      <Navigation tabs={sections} />
      <IntroBlock />
      <PortfolioBody sections={sections}></PortfolioBody>
    </>
  );
}

export default App;
