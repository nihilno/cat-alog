import { isIP } from "node:net";

function isPrivateHostname(hostname: string) {
  if (
    hostname === "localhost" ||
    hostname.endsWith(".localhost") ||
    hostname.endsWith(".local") ||
    hostname.endsWith(".internal")
  ) {
    return true;
  }

  const ipType = isIP(hostname);
  if (!ipType) return false;

  // IPv4 private + loopback ranges
  if (hostname.startsWith("10.")) return true;
  if (hostname.startsWith("192.168.")) return true;
  if (hostname.startsWith("172.")) {
    const secondOctet = Number(hostname.split(".")[1] ?? "0");
    if (secondOctet >= 16 && secondOctet <= 31) return true;
  }
  if (hostname.startsWith("127.")) return true;

  return false;
}

export function validateProductUrl(raw: string) {
  let parsed: URL;
  try {
    parsed = new URL(raw);
  } catch {
    throw new Error("Please enter a valid URL.");
  }

  if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
    throw new Error("Only HTTP/HTTPS URLs are allowed.");
  }

  if (isPrivateHostname(parsed.hostname)) {
    throw new Error("This URL cannot be scraped.");
  }

  return parsed.toString();
}
