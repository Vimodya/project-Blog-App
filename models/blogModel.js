const mongoose = require("mongoose");
const validator = require("validator");

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
});

const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);

module.exports = Blog;
