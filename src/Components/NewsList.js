import React , {useState, useEffect} from 'react';
import axios from 'axios';
import Pagination from './Pagination';
import NewsItem from './NewsItem';
import './Newsitem.css';
import Navbar from './Navbar';



const NewsList = (props)  =>  {
  const [prev, setPrev] = useState([]);
    const [articles , setArticles] = useState([])
    const [search, setSearch] = useState("everything")
    
    

    useEffect(() =>{
        const getArticles = async ()  =>{
        const response = await axios.get(`https://newsapi.org/v2/everything?q=${search}&apiKey=b059a5848a7043b4a0c8e568935a7b19`);
            // console.log(response);
            setArticles((response.data.articles).slice(0,9));
            setPrev(response.data.articles);
        }
         getArticles();
    }, [search])
    // manchester${}


    

   
    
  return (
    <>
        {}

        <Navbar search={search} setSearch={setSearch} />
   
        {articles?.map(article =>{
          return(
            <>

          
            
            <NewsItem 
               title={article.title}
               description={article.description}
               url = {article.url}
               urlToImage= {article.urlToImage}
            />



         </>
          )
        })}

        <Pagination articles={articles} setArticles={setArticles} prev={prev} />
    </>
  ) 
}

export default NewsList





