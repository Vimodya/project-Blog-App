import { NextResponse } from "next/server";
import connectMongoDB from "../../../../lib/mongodb";
import Blog from "../../../../models/BlogModel";

// export async function POST(req) {
//   try {
//     const { authorName, publishDate, blogCategory, blogTitle, blogContent } =
//       await req.json();
//     console.log("Received data:", {
//       authorName,
//       publishDate,
//       blogCategory,
//       blogTitle,
//       blogContent,
//     });

//     // Validate input
//     if (
//       !authorName ||
//       !publishDate ||
//       !blogCategory ||
//       !blogTitle ||
//       !blogContent
//     ) {
//       return NextResponse.json(
//         { message: "All fields are required" },
//         { status: 400 }
//       );
//     }

//     await connectMongoDB();

//     const blog = new Blog({
//       authorName,
//       publishDate,
//       blogCategory,
//       blogTitle,
//       blogContent,
//     });

//     const res = await blog.save();
//     console.log("Created blog entry:", res);

//     if (!res) {
//       console.error("Failed to create blog entry in database");
//       return NextResponse.json(
//         { message: "Failed to create blog" },
//         { status: 500 }
//       );
//     }

//     return NextResponse.json({ id: res._id }, { status: 201 });
//   } catch (error) {
//     console.error("Error in blog creation:", error);
//     return NextResponse.json(
//       { message: "Failed to create blog" },
//       { status: 500 }
//     );
//   }
// }
export async function POST(req) {
  try {
    const { authorName, publishDate, blogCategory, blogTitle, blogContent } =
      await req.json();
    console.log("Received data:", {
      authorName,
      publishDate,
      blogCategory,
      blogTitle,
      blogContent,
    });

    if (
      !authorName ||
      !publishDate ||
      !blogCategory ||
      !blogTitle ||
      !blogContent
    ) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    await connectMongoDB();

    const blog = new Blog({
      authorName,
      publishDate,
      blogCategory,
      blogTitle,
      blogContent,
    });

    const res = await blog.save();
    console.log("Created blog entry:", res);

    return NextResponse.json({ id: res._id }, { status: 201 });
  } catch (error) {
    if (error.code === 11000) {
      console.error("Duplicate key error:", error);
      return NextResponse.json(
        { message: "Duplicate key error" },
        { status: 400 }
      );
    }

    console.error("Error in blog creation:", error);
    return NextResponse.json(
      { message: "Failed to create blog" },
      { status: 500 }
    );
  }
}
