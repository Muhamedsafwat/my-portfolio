import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(request) {
  const { username, password } = await request.json();
  if (
    username == process.env.ADMIN_USERNAME &&
    password == process.env.ADMIN_PASSWORD
  ) {
    const token = jwt.sign(
      { username, role: "admin" },
      process.env.JWT_SECRET,
      {
        expiresIn: "5d",
      }
    );

    return new NextResponse(JSON.stringify({ userRole: "admin", username }), {
      status: 200,
      headers: {
        "Set-Cookie": `token=${token}`,
      },
    });
  } else {
    console.log(process.env.ADMIN_USERNAME, process.env.ADMIN_PASSWORD);
    return new NextResponse("Invalid login data", { status: 401 });
  }
}
