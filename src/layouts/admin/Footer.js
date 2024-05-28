import React from 'react';
import {Link} from 'react-router-dom';

export const Footer = () => {
  return (
    <>
    <div class="d-sm-flex justify-content-center justify-content-sm-between">
          <span class="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © <Link to="https://www.bootstrapdash.com/" target="_blank">bootstrapdash.com </Link>2021</span>
          <span class="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Only the best <Link to="https://www.bootstrapdash.com/" target="_blank"> Bootstrap dashboard  </Link> templates</span>
        </div>
    </>
  )
}
