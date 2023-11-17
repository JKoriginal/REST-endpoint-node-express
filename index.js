import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json([
    {
      message: "hello Dileesha"
    }
  ]);
});

app.post("/register", (req, res) => {

  res.sendStatus(201);
});

app.put("/user/dileesha", (req, res) => {
  
  res.sendStatus(200);
});

app.patch("/user/dileesha", (req, res) => {
  
  res.sendStatus(200);
});

app.delete("/user/dileesha", (req, res) => {
  
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
