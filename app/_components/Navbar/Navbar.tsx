import Link from 'next/link';
import React from 'react';

const Navbar = () => (
  <header className="navbar bg-base-100 shadow-sm w">
    <div className="m-auto w-full sm:w-9/12 flex justify-between">
      <div>
        <Link href="/" className="btn btn-ghost text-xl">
          <h1>Extendeal</h1>
        </Link>
      </div>
      <nav>
        <ul className="menu menu-horizontal hidden sm:flex gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/product/new">New product</Link>
          </li>
        </ul>
        <details className="dropdown dropdown-end flex sm:hidden">
          <summary className="m-1 btn btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/product/new">New product</Link>
            </li>
          </ul>
        </details>
      </nav>
    </div>
  </header>
);

export default Navbar;
