"use client";
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

type Props = {
  targetUserId: string;
  isFollowing: boolean;
};

export default function FollowClient({ targetUserId, isFollowing }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);
  const isMutation = isPending || isFetching;

  const follow = async () => {
    setIsFetching(true);

    const res = await fetch("/api/follow", {
      method: "POST",
      body: JSON.stringify({ targetUserId }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setIsFetching(false);
    startTransition(() => {
      router.refresh();
    });
  };

  const unfollow = async () => {
    setIsFetching(true);

    const res = await fetch(`/api/follow?targetUserId=${targetUserId}`, {
      method: "DELETE",
    });

    setIsFetching(false);
    startTransition(() => {
      router.refresh();
    });
  };

  return (
    <button className="" onClick={isFollowing ? unfollow : follow}>
      {isMutation ? "..." : isFollowing ? "Unfollow" : "Follow"}
    </button>
  );
}
