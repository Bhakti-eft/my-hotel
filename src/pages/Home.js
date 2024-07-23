import React from 'react';
import Layout from '../components/Layout/Layout';
import { Link } from 'react-router-dom';
import Banner from '../images/banner3.jpg';
import '../styles/homeStyles.css';

const Home = () => {
  return (
    <Layout>
      <div className='home' style={{backgroundImage:`url(${Banner})`}}>
        <div class="headerContainer">
          <h1>Home decor Website</h1>
          <p>Best Decoration in India</p>
          <Link to="/gallary">
          <button>
            BOOK NOW
          </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
