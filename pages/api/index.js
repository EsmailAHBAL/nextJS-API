import nc from 'next-connect'

const handler = nc()
.get((req,res)=>{
    res.json({
        message : "hello"
    })
})

export default handler