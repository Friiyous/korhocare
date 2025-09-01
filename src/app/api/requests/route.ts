import {NextRequest, NextResponse} from "next/server"
import {prisma} from "@/lib/prisma"

export async function GET() {
  const data = await prisma.serviceRequest.findMany({orderBy: {createdAt: "desc"}})
  return NextResponse.json(data)
}
export async function POST(req: NextRequest) {
  const body = await req.json()
  const created = await prisma.serviceRequest.create({data: body})
  return NextResponse.json(created, {status: 201})
}
