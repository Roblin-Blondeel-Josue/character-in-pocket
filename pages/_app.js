import '../styles/globals.css';
import ThemeProvider from '../styles/theme';
import { ReadWrapper } from '../component/caracterSheet/SheetContext';

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <ReadWrapper>
        <Component {...pageProps} />
      </ReadWrapper>
    </ThemeProvider>
  );
}

export default MyApp;
