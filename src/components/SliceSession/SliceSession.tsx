/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import authApiRequest from "@/HttpRequest/authRequest";
import { useEffect, useState } from "react";
import { differenceInHours } from "date-fns";

function SliceSession() {
  const [refreshToken, setRefreshToken] = useState<string | null>();
  const [expiresAt, setExpiresAt] = useState<number | null>();

  useEffect(() => {
    const tokens = JSON.parse(localStorage.getItem("tokens") as string);
    const refreshToken = tokens?.refreshToken;
    const expiresAt = tokens?.accessTokenExpiresIn;

    setRefreshToken(refreshToken);
    setExpiresAt(expiresAt);
  }, []);

  useEffect(() => {
    const interval = setInterval(async () => {
      if (expiresAt !== null) {
        const now = new Date();
        const expirationDate = new Date(expiresAt as number);

        if (differenceInHours(expirationDate, now) < 1) {
          const result =
            await authApiRequest.sliceSessioFromNextClientToNextServer(
              refreshToken as string
            );

          localStorage.setItem(
            "expiresAt",
            (result.payload as any).data.expiresAt
          );
        }
      }
    }, 1000 * 60 * 60); // Mỗi giờ check lại

    return () => clearInterval(interval);
  }, [expiresAt, refreshToken]);

  return null;
}

export default SliceSession;
