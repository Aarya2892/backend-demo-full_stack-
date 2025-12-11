import express from "express"

const app = express();
const port = process.env.PORT || 3000;

app.get('/jokes', (req, res)=>{
    const jokes=[{
    "id": 1,
    "title": "Library Mystery",
    "content": "I asked the librarian if the library had books on paranoia. She whispered, 'They're right behind you...'"
  },
  {
    "id": 2,
    "title": "Computer Problem",
    "content": "My computer beat me at chess, but it was no match for me at kickboxing."
  },
  {
    "id": 3,
    "title": "Time Travel",
    "content": "I was going to tell you a time-travel joke, but you didn't like it."
  },
  {
    "id": 4,
    "title": "Parallel Lines",
    "content": "Parallel lines have so much in common. It’s a shame they’ll never meet."
  },
  {
    "id": 5,
    "title": "Broken Pencil",
    "content": "I tried to write with a broken pencil... but it was pointless."
  }]
    res.send(jokes)
})

app.listen(port, (req,res)=>{
    console.log(`your app running on port ${port}`)
})