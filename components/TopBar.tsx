'use client';

import Link from 'next/link';

export default function TopBar() {
  return (
    <div className="bg-top navbar-light">
      <div className="container">
        <div className="row no-gutters d-flex align-items-center align-items-stretch">
          <div className="col-md-4 d-flex align-items-center py-4">
            <Link className="navbar-brand" href="/">Consolution</Link>
          </div>
          <div className="col-lg-8 d-block">
            <div className="row d-flex">
              <div className="col-md d-flex topper align-items-center align-items-stretch py-md-4">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="icon-paper-plane"></span>
                </div>
                <div className="text">
                  <span>Email</span>
                  <span>youremail@email.com</span>
                </div>
              </div>
              <div className="col-md d-flex topper align-items-center align-items-stretch py-md-4">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="icon-phone2"></span>
                </div>
                <div className="text">
                  <span>Call</span>
                  <span>Call Us: + 1235 2355 98</span>
                </div>
              </div>
              <div className="col-md topper d-flex align-items-center justify-content-end">
                <p className="mb-0 d-block">
                  <Link href="/contact" className="btn py-2 px-3 btn-primary">
                    <span>Free Consulting</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

