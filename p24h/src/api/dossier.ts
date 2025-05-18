import type { VercelRequest, VercelResponse } from "@vercel/node";

/**
 * Nettoie les headers pour les rendre compatibles avec fetch (HeadersInit)
 */
function sanitizeHeaders(
  headers: Record<string, string | string[] | undefined>
): Record<string, string> {
  const sanitized: Record<string, string> = {};

  for (const [key, value] of Object.entries(headers)) {
    if (typeof value === "string") {
      sanitized[key] = value;
    } else if (Array.isArray(value)) {
      sanitized[key] = value.join(","); // Convertit les tableaux en chaîne
    }
    // ignore undefined
  }

  return sanitized;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const remotePath = req.url?.replace(/^\/api\/dossier/, "") ?? "";
    const targetUrl = `https://api.24h.etiq-dijon.fr${remotePath}`;

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
  } catch (err: any) {
    res.status(500).json({ error: err.message || "Erreur proxy dossier" });
  }
}
