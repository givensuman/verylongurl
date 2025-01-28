"use client"

import { useState } from "react"

import URLEntry from "~/components/URLEntry";
import URLResult from "~/components/URLResult";

export default function HomePage() {

  const [uuid, setUUID] = useState<string | null>(null)

  return (
    <div>
      <URLEntry setUUID={setUUID} />
      {uuid && <URLResult uuid={uuid} />}
    </div>
  );
}

