import React from 'react';

export default function Navbar({search, setSearch}) {

    
    

    function clicked(e) {

      e.preventDefault();
     

      var result = document.getElementById("search-data").value;
      console.log(result);
      setSearch(result);
      console.log(search);
    }
    
  return (
    <div>
        <>
        
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Home</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">  Categories   : -</a>
        </li>
        <li className="nav-item">
        <a style={{ marginRight: '3px'  }} className="btn btn btn-info" href="#"  onClick={() => { setSearch("cricket") }} >Cricket</a>
        </li>
        <li className="nav-item">
        <a style={{ marginRight: '3px'  }} className="btn btn btn-info" href="#" onClick={() => { setSearch("football") }} >Football</a>
        </li>
        <li className="nav-item">
        <a style={{ marginRight: '3px'  }} className="btn btn btn-info" href="#" onClick={() => { setSearch("education") }} >Education</a>
        </li>
        <li className="nav-item">
        <a style={{ marginRight: '3px'  }} className="btn btn btn-info" href="#" onClick={() => { setSearch("punjab") }} >Punjab's News</a>
        </li>
        <li className="nav-item">
        <a style={{ marginRight: '3px'  }} className="btn btn btn-info" href="#" onClick={() => { setSearch("war") }} >War</a>
        </li>
        <li className="nav-item">
        <a style={{ marginRight: '3px'  }} className="btn btn btn-info" href="#" onClick={() => { setSearch("government") }} >Government</a>
        </li>
        <li className="nav-item">
        <a style={{ marginRight: '3px'  }} className="btn btn btn-info" href="#" onClick={() => { setSearch("business") }} >Business</a>
        </li>
        <li className="nav-item">
        <a style={{ marginRight: '3px'  }} className="btn btn btn-info " href="#" onClick={() => { setSearch("entertainment") }} >Entertainment</a>
        </li>
        <li className="nav-item">
        <a style={{ marginRight: '3px'  }} className="btn btn btn-info" href="#" onClick={() => { setSearch("fashion") }} >Fashion</a>
        </li>
        <li className="nav-item">
        <a className="btn btn btn-info" href="#" onClick={() => { setSearch("economy") }} >Economy</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input id="search-data"  className="form-control me-2" type="search" placeholder="Search"  aria-label="Search" />
        <button className="btn btn-outline-success" onClick={(e)=> clicked(e)} >Search</button>
      </form>
    </div>
  </div>
</nav>
        </>
    </div>
  );
}



