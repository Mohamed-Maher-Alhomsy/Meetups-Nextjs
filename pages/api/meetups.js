const handler = (req, res) => {
  console.log(req.method);

  console.log(true);

  res.status(201).json({ message: "Hello" });
};

export default handler;
