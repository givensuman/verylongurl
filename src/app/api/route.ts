import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";
import { normalizeURL } from "ufo"
import { customAlphabet } from "nanoid"

import { db } from "~/server/db"
import { urls } from "~/server/db/schema";

const nanoid = customAlphabet("0123456789abcdef", 10)

export async function POST(req: NextRequest) {
  const body = await req.json()
  if (!body.url) {
    return NextResponse.json("No URL provided in POST request", { status: 300 })
  }

  const url = normalizeURL(body.url)
  const r = await db.select().from(urls).where(eq(urls.url, body.url))

  if (r.length > 0) {
    return NextResponse.json({ uuid: r[0]!.uuid }, { status: 201 })
  }

  const uuid = nanoid(512)
  return NextResponse.json({ uuid }, { status: 200 })
}
