// pages/api/getBlogs.js

import connectMongoDB from "../../../../../lib/mongodb";
import Blog from "../../../../../models/BlogModel";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).end(); // Method Not Allowed
  }

  await connectMongoDB();

  try {
    // Fetch blogs based on category
    const { category } = req.query;
    const blogs = await Blog.find({ blogCategory: category });

    // Return fetched blogs as JSON response
    res.status(200).json(blogs);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
