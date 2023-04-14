import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const packageId = parseInt(params.id);

  const image = await prisma.image.findUnique({
    where: {
      packageId: packageId,
    },
    include: { Package: true },
  });

  return NextResponse.json(image);
}
