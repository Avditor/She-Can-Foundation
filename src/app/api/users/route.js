import { NextResponse } from "next/server";
import { connectDB } from "@/utils/database";
import User from "@/models/user";

export async function GET() {
  try {
    await connectDB();
    const users = await User.find({}, "name email");
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
  }
}
