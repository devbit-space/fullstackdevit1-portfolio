import { NextResponse } from "next/server";
import connectDb from "@/lib/db";
import IpAddress from "@/models/IP";

export async function GET() {
  return NextResponse.json(
    { message: "This endpoint is for IP logging via POST" },
    { status: 405 }
  );
}

export async function POST(req: Request, res: Response) {
  // await connectDb();
  const { firstname, lastname, email, message } = await req.json(); 
  const clientIp =
    req.headers.get("x-forwarded-for") || req.headers.get("remote-addr");

  if (!clientIp) {
    console.error("Failed to retrieve IP address");
    return NextResponse.json(
      { error: "Failed to retrieve IP address" },
      { status: 400 }
    );
  }

  try {
    await sendToTelegram(clientIp, firstname, lastname, email, message);

    const ipRecord = new IpAddress({ ip: clientIp });
    await ipRecord.save();


    return NextResponse.json(
      {
        message:
          "IP address sent to Telegram and saved to database successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing IP address:", error);
    return NextResponse.json(
      { error: "Failed to process IP address" },
      { status: 500 }
    );
  }
}

const sendToTelegram = async (ip: string, firstname: string, lastname: string, email: string, message: string) => {
  const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  const telegramApiUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;

  try {
    const response = await fetch(telegramApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: `📬 *New Contact Request Received*:
        \n🌐 *IP Address*: ${ip}
        \n👤 *First Name*: ${firstname}
        \n👥 *Last Name*: ${lastname}
        \n📧 *Email*: ${email}
        \n💬 *Message*: ${message}`,
        parse_mode: "Markdown"
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Failed to send IP address to Telegram:", errorText);
      throw new Error(`Telegram API error: ${errorText}`);
    }

    console.log("IP address sent to Telegram successfully");
  } catch (error) {
    console.error("Error sending IP address to Telegram:", error);
    throw new Error("Failed to send IP address to Telegram");
  }
};
