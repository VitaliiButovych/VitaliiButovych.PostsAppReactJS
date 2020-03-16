import React from 'react';
import Navbar from '../components/Navbar';

export default MainLayout;

function MainLayout( {children} ) {
  return (
    <main className="uk-main">
      <Navbar />
      <div className="uk-section">
        <div className="uk-container">{children}</div>
      </div>
    </main>
  );
}
