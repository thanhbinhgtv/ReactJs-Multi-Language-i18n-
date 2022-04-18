// yarn add react-i18next i18next i18next-http-backend
// OR
// npm install react-i18next i18next i18next-http-backend --save
import logo from './logo.svg';
import './App.css';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from 'i18next';

function App() {
  const { t } = useTranslation()

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <button className='App-btn' onClick={() => changeLanguage('en')}>En</button>
          <button className='App-btn' onClick={() => changeLanguage('vi')}>Vi</button>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {t('content.title')}
        </p>
        <a
          className="App-link"
          href="https://viblo.asia/p/huong-dan-da-ngon-ngu-cho-du-an-reactjs-su-dung-react-i18next-LzD5da8EKjY"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('content.description')}
        </a>
      </header>
    </div>
  );
}

export default App;
