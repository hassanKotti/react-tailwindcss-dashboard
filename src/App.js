import './css/App.css';
import Main from './pages/Main';
import {Helmet} from "react-helmet";

function App() {
  return (
    <>
    <Helmet>
      <title>HK Dashboard</title>
    </Helmet>
      <Main />
    </>
  );
}

export default App;
