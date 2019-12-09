import React from "react";
import { Link } from "react-router-dom";

function Header(){
  return(
    <header style={headerStyle}>
      <Link
        style={linkStyle}
        to="/"
      >
        <h1>
          Johnny Wong
        </h1>
      </Link>
    </header>
  );
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
  textTransform: 'uppercase',

}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
}

export default Header;
