import { NextResponse } from "next/server";

import connectDB from "@/utils/db";
import Project from "@/models/Project";

export async function GET(request) {
  try {
    await connectDB();
  } catch (error) {
    console.log(error);
    return new NextResponse("Couldn't connect to database", { status: 500 });
  }

  const projects = await Project.find({ highlight: true });

  if (projects) {
    return new NextResponse(JSON.stringify(projects), { status: 200 });
  } else {
    return new NextResponse("No projects found", { status: 404 });
  }
}
