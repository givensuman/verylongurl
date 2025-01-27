import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";
import { normalizeURL } from "ufo"

import { db } from "~/server/db"
import { urls } from "~/server/db/schema";


export async function POST(req: NextRequest) {
  const body = await req.json()
  if (!body.url) {
    return NextResponse.json("No URL provided in POST request", { status: 300 })
  }

  // const url = normalizeURL(body.url)
  const r = await db.select().from(urls).where(eq(urls.url, body.url))
  console.log(r)


  return NextResponse.json(null, { status: 200 })
}
