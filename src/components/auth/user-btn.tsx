"use client";

import { useSession } from "@/app/hooks/useSession";
import { User } from "lucide-react";
import Image from "next/image";

function UserBtn() {
  const { user } = useSession();
  const avatar = user?.user_metadata.avatar_url || null;

  return avatar ? (
    <Image
      src={avatar}
      width={24}
      height={24}
      alt="Avatar"
      className="button-hover cursor-pointer rounded-full"
    />
  ) : (
    <User className="button-hover hover:text-primary size-6 cursor-pointer" />
  );
}

export default UserBtn;
