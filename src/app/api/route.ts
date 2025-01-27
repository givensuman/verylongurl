import { NextRequest, NextResponse } from "next/server";
import { normalizeURL } from "ufo"

export async function POST(req: NextRequest) {
  const body = await req.json()
  if (!body.url) {
    return NextResponse.json("No URL provided in POST request", { status: 300 })
  }

  normalizeURL("yo")

  return NextResponse.json(null, { status: 200 })
}
