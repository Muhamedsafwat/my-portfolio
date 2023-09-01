import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

import connectDB from "@/utils/db";
import Project from "@/models/Project";

export async function POST(request) {
  try {
    await connectDB();
  } catch (error) {
    console.log(error);
    return new NextResponse("Couldn't connect to database", { status: 500 });
  }
  const token = request.cookies.get("token").value;
  const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

  if (decodedToken.role == "admin") {
    const projectData = await request.json();

    try {
      await Project.create({ ...projectData });
      return new NextResponse("Created successfully", { status: 201 });
    } catch (error) {
      console.log(error);
      return new NextResponse("Couldn't save project", { status: 500 });
    }
  } else {
    return new NextResponse("Unauthorized", { status: 401 });
  }
}
