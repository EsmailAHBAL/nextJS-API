export default ({courses})=>{
    return(
        <div className="container mt-5">
            <div className="block">
                <div className="block d-flex justify-content-between mt-4">
                    <span className="tag is-info">Id</span>
                    <h3 className="">{courses.id}</h3>
                </div>
                <div className="block d-flex justify-content-between mt-2">
                    <span className="tag is-info">Name</span>
                    <h3 className="">{courses.Name}</h3>
                </div>
                <div className="block d-flex justify-content-between mt-2">
                    <span className="tag is-info">Email</span>
                    <h3 className="">{courses.email}</h3>
                </div>
                <div className="block mt-2">
                    
                    <span className="tag is-info mt-4">Body</span>
                    <h5 className="mt-4">{courses.body}</h5>
                </div>
            </div>
        </div>
    )
}

export const  getServerSideProps=async({params,req,res})=>{
  const api =`https://jsonplaceholder.typicode.com/comments/${params.id}`

  const response = await fetch(api)
  if(!response.ok){
    res.writeHead(302,{
        Location:"/courses"
    })
    res.end()
    return {
        props:{}
    }
   }

   const data = await response.json()

   return {
    props :{
        courses :data
    }
   }
}