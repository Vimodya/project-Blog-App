import { NextResponse } from "next/server";
import connectMongoDB from "../../../../lib/mongodb";
import Blog from "../../../../models/blogModel";

export async function POST(req) {
  try {
    const { authorName, publishDate, blogCategory } = await req.json();
    console.log("Received data:", { authorName, publishDate, blogCategory });

    // Validate input
    if (!authorName || !publishDate || !blogCategory) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    await connectMongoDB();

    const res = await Blog.create({ authorName, publishDate, blogCategory });

    if (!res) {
      console.error("Failed to create blog entry in database");
      return NextResponse.json(
        { message: "Failed to create blog" },
        { status: 500 }
      );
    }

    return NextResponse.json({ id: res._id }, { status: 201 });
  } catch (error) {
    console.error("Error in blog creation:", error);
    return NextResponse.json(
      { message: "Failed to create blog" },
      { status: 500 }
    );
  }
}
