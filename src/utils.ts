export async function getClientIp(headers: () => Headers): Promise<string> {
    const requestHeaders = headers();
  
    const forwardedFor = requestHeaders.get("x-forwarded-for");
    const realIp = requestHeaders.get("x-real-ip");
    const cfConnectingIp = requestHeaders.get("cf-connecting-ip");
  
    const ip = forwardedFor || realIp || cfConnectingIp || "Unknown IP";
  
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/ip`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ip }),
    });
  
    return ip;
}
  