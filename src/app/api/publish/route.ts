export default function handler(req, res) {
  if (req.method === "POST") {
    const { authorName, blogTitle, publishDate, blogCategory } = req.body;

    // Here you can handle the form data, e.g., save it to a database

    res
      .status(200)
      .json({ message: "Form submitted successfully", data: req.body });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
