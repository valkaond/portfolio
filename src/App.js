import './App.css';
import Layout from './layout/Layout';
import Content from './components/Content';
import Menu from './components/Menu';

function App() {
  return (
    <div className='App'>
      <Layout>
        <div id="layout">
          <Menu/>
          <Content/>
        </div>
      </Layout>
    </div>
  );
}

export default App;
