import PageNav from '../components/PageNav';
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <div>
      {' '}
      <PageNav />
      <h1>Homepage</h1>
      <Link to='/applayout'>Go to App Layout</Link>
    </div>
  );
}

export default Homepage;
