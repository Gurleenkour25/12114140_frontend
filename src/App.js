// import React from 'react';
// import Dashboard from './components/Dashboard';
// import Header from './components/layout/Header';
// import Footer from './components/layout/Footer';
// import './App.css';
// import 'react-date-range/dist/styles.css'; // main style file
// import 'react-date-range/dist/theme/default.css'; // theme css file



// const App = () => {
//   return (
//     <div className="app">
//       <Header />
//       <main>
//         <Dashboard />
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default App;








import React from 'react';
import Dashboard from './components/Dashboard';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import './App.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const App = () => (
  <div className="app">
    <Header />
    <main>
      <Dashboard />
    </main>
    <Footer />
  </div>
);

export default App;
