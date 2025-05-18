import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const remotePath = req.url?.replace(/^\/api\/auth/, "") ?? "";
  const targetUrl = `https://api24h.82.29.175.123.nip.io/api${remotePath}`;

  const sanitizedHeaders = sanitizeHeaders(req.headers);

  const response = await fetch(targetUrl, {
    method: req.method,
    headers: sanitizedHeaders,
    body:
      req.method !== "GET" && req.body ? JSON.stringify(req.body) : undefined,
  });

  const contentType = response.headers.get("content-type");
  res.status(response.status);

  if (contentType?.includes("application/json")) {
    const data = await response.json();
    res.json(data);
  } else {
    const text = await response.text();
    res.send(text);
  }
}

function sanitizeHeaders(
  headers: Record<string, string | string[] | undefined>
): Record<string, string> {
  const sanitized: Record<string, string> = {};

  for (const [key, value] of Object.entries(headers)) {
    if (typeof value === "string") {
      sanitized[key] = value;
    } else if (Array.isArray(value)) {
      sanitized[key] = value.join(","); // convertir un tableau en chaîne
    }
  }

  return sanitized;
}
