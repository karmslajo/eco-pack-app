import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const packages = await prisma.package.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(packages);
  } catch (error) {
    console.log(error);
  } finally {
    await prisma.$disconnect();
  }
}
