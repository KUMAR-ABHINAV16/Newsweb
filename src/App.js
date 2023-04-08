
import './App.css';

import Navbar from './Components/Navbar';
import NewsItem from './Components/NewsItem';
import NewsList from './Components/NewsList';
import SignInPage from './Components/SignInPage'
import React,{useState} from 'react';
// import ReactPaginate from 'react-paginate';


function App({sign}) {
  const [sign, setSign] = useState(true);
  return (
    <>

    {
      sign ? ( <NewsList />  ) : ( <SignInPage  />)
    }
    </>
  );
}

export default App;




