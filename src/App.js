import './App.scss';
import { IntroBlock, Navigation, PortfolioBody } from '@components/building-blocks';
import { Footer } from 'components/building-blocks/footer/Footer';

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
  {
    label: 'Contact',
    id: 'contact',
  }
];

function App() {
  return (
    <>
      <Navigation tabs={sections} />
      <IntroBlock />
      <PortfolioBody sections={sections}></PortfolioBody>
      <Footer></Footer>
    </>
  );
}

export default App;
