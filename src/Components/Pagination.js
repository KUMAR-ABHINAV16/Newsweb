import React,{useState} from 'react';


export default function Pagination({ setArticles, prev}) {
   
    const [currpage, setCurrpage] = useState(1);
    const length = prev?.length;
    const lastItem = currpage *9;
    const firstItem = lastItem-9;
    

    var arr =[];
    var j = 1;
   
   for(let i = 0; i<length; i+=9){
        arr.push(j++);
   }
  
  return (
    <div style={{display:"flex", justifyContent:'center' , alignItems:'center', flexWrap:'wrap' }}>
        {
            arr.map((item, index)=>(
                <div key={index} style={{margin:'5px', backgroundColor:"white", padding:"10px", boxShadow:'0px 0px 10px black', cursor:'pointer'}} 

                onClick={()=>{setCurrpage(item);setArticles(prev.slice(firstItem, lastItem))}}
                >
                    {item}
                </div>
            ))

            
        }

        


    </div>
  );
}
