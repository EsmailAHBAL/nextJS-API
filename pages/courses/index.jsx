import Link from "next/link"
import React from "react"

export default (props) =>{
  
    return (
        <div className="columns is-multiline">

            {
                props.data.map(item=>
                    
                    (
                       
                             <div className="column is-4" key={item.id} >
                                <Link href={`/courses/${item.id}`}>
                                <div className="card pt-4">
                                <div className="block  ml-2" style={{height:'10vh'}} >
                                 <span className="tag is-success block">Name </span>
                                 <p>{item.name}</p> 
                                </div>
                                <div className="block ml-2" style={{height:'10vh'}}>
                                 <span className="tag is-success block">email </span>
                                 <p>{item.email}</p> 
                                </div>
                                <div className="block ml-2" style={{height:'30vh'}}>
                                 <span className="tag is-success block">Body </span>
                                 <p>{item.body}</p> 
                                </div>
                                
                                </div>
                                </Link>
                             </div>
                        
                    )
                    )
            }
        </div>
    )
}

 export const getStaticProps=async()=> {

    const api=`http://localhost:3000/api/hello`
    const response = await fetch(api)

    const {data} = await response.json()

    return {
        props :{
            
            data : data
        }
    }
}