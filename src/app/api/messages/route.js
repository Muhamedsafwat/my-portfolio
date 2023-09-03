import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

import connectDB from "@/utils/db";
import Message from "@/models/Message";

export async function POST(request) {
  try {
    await connectDB();
  } catch (error) {
    console.log(error);
    return new NextResponse("Couldn't connect to database", { status: 500 });
  }

  const messageData = await request.json();

  try {
    await Message.create({ ...messageData });
    return new NextResponse("saved successfully", { status: 201 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Couldn't save message", { status: 500 });
  }
}

export async function GET(request) {
  try {
    await connectDB();
  } catch (error) {
    console.log(error);
    return new NextResponse("Couldn't connect to database", { status: 500 });
  }
  const token = request.cookies.get("token").value;
  const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

  if (decodedToken.role == "admin") {
    const messages = await Message.find();

    if (messages) {
      return new NextResponse(JSON.stringify(messages), { status: 200 });
    } else {
      return new NextResponse("No messages found", { status: 404 });
    }
  } else {
    return new NextResponse("Unauthorized", { status: 401 });
  }
}
