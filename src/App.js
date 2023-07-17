import './App.css';
import Layout from './layout/Layout';
import Content from './components/Content';
import Menu from './components/Menu';

function App() {
  return (
    <Layout>
      <Menu/>
      <Content/>
    </Layout>
  );
}

export default App;
