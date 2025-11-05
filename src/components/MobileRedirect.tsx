'use client';

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function MobileRedirect() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const isMobile = window.innerWidth < 1024;

    if (isMobile && pathname !== "/mobile") {
      router.push("/mobile");
    }
  }, [pathname, router]);

  return null;
}
