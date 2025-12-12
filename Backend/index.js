import express from "express"

const app = express();
const port = process.env.PORT || 3000;

app.get('/api/jokes', (req, res)=>{
    const jokes=[
  {
    "tis": "001",
    "title": "Atomic Trust Issues",
    "content": "Why don’t scientists trust atoms? Because they make up everything!"
  },
  {
    "tis": "002",
    "title": "Foggy Attempt",
    "content": "I tried to catch fog yesterday. Mist."
  },
  {
    "tis": "003",
    "title": "Top Performer",
    "content": "Why did the scarecrow win an award? He was outstanding in his field!"
  },
  {
    "tis": "004",
    "title": "Pasta Fraud",
    "content": "What do you call fake spaghetti? An impasta!"
  },
  {
    "tis": "005",
    "title": "Sad Math Book",
    "content": "Why did the math book look sad? It had too many problems."
  }
]
    res.send(jokes)
})

app.listen(port, (req,res)=>{
    console.log(`your app running on port ${port}`)
})