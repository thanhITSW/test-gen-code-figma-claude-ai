import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from './contexts/ThemeContext';
import './index.css'
import App from './App'
import './styles/main.scss'
import './App.css'
import './i18n';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Header from './components/ui/Header/components/Header';
import Footer from './components/ui/Footer/components/Footer';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <Header />
        <App />
        <Footer />
      </ThemeProvider>
    </Provider>
  </StrictMode>,
)
