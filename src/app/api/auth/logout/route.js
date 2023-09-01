import { NextResponse } from "next/server";

export async function POST(request) {
  return new NextResponse("logged out", {
    status: 200,
    headers: {
      "Set-Cookie": "token=null",
    },
  });
}
