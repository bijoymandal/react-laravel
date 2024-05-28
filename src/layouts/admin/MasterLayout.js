import React from 'react'
//import $ from 'jquery';


import Navbar from './Navbar';
import { Sidebar } from './Sidebar';
import { Footer } from './Footer';


const MasterLayout = () => {
  return (
    <>
        <div className='container-scroller'>
            <Navbar/>
            <div className="container-fluid page-body-wrapper">
                <Sidebar/>
                <div class="main-panel">
                    <div class="content-wrapper">
                        Master Page
                    </div>
                    <footer class="footer">
                        <Footer/>
                    </footer>
                </div>
            </div>
        </div>
    </>
  );
}

export default MasterLayout;

