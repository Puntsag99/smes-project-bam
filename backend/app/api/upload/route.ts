// app/api/upload/route.ts
import { NextRequest, NextResponse } from "next/server";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { r2 } from "@/lib/r2";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get("file") as File;

  if (!file) {
    return NextResponse.json({ error: "No file found" }, { status: 400 });
  }

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const fileName = `${Date.now()}-${file.name}`;

  const command = new PutObjectCommand({
    Bucket: process.env.R2_BUCKET!,
    Key: fileName,
    Body: buffer,
    ContentType: file.type,
  });

  await r2.send(command);

  const imageUrl = `${process.env.R2_DEVELOPMENT_URL}/${fileName}`;

  return NextResponse.json({ imageUrl });
}
