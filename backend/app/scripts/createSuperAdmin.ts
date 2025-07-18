import { clerkClient } from "@clerk/clerk-sdk-node";
import { PrismaClient } from "../../app/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  const email = "herosh304@gmail.com";
  const password = "A7x!9$kLpQ#v";

  const existingUsers = await clerkClient.users.getUserList({
    emailAddress: [email],
  });

  if (existingUsers.data.length > 0) {
    console.log("⚠️ SuperAdmin аль хэдийн бүртгэлтэй байна.");
    return;
  }

  const clerkUser = await clerkClient.users.createUser({
    emailAddress: [email],
    password,
    publicMetadata: {
      role: "SUPERADMIN",
    },
  });

  const user = await prisma.user.create({
    data: {
      id: clerkUser.id,
      clerkId: clerkUser.id,
      email: email,
      role: "SUPERADMIN",
    },
  });

  console.log("✅ SuperAdmin үүссэн:", user);
}

main()
  .catch((e) => {
    console.error("❌ Алдаа:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
