import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import PhotoListProvider from './contexts/PhotoListContext';

function App() {
  return (
    <PhotoListProvider>
      <div>
        <Header />
        <hr />
        <Main />
      </div>
    </PhotoListProvider>
    
  );
}

export default App;
