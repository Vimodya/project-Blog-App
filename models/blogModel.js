const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  authorName: {
    type: String,
    required: [true, "Please enter the author's name"],
  },
  publishDate: {
    type: Date,
    required: [true, "Please enter the publish date"],
  },
  blogCategory: {
    type: String,
    required: [true, "Please enter the blog category"],
  },
  blogTitle: {
    type: String,
    required: [true, "Please enter the blog title"],
  },
  blogContent: {
    type: String,
    required: [true, "Please enter the blog content"],
  },
});

const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);

module.exports = Blog;
