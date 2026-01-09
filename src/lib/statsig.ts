// src/lib/statsig.ts
import { StatsigClient } from "@statsig/js-client";

function getStableAnonUserID() {
  // safety: por si alguna vez corre fuera del browser
  if (typeof window === "undefined") return "server";

  const KEY = "anon_user_id";
  let id = window.localStorage.getItem(KEY);

  if (!id) {
    id =
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `anon_${Math.random().toString(16).slice(2)}_${Date.now()}`;

    window.localStorage.setItem(KEY, id);
  }

  return id;
}

const isDev = import.meta.env.DEV;
const userID = isDev ? "pablo-dev" : getStableAnonUserID();

export const statsigClient = new StatsigClient(
  import.meta.env.VITE_STATSIG_CLIENT_KEY as string,
  { userID },
  { environment: { tier: isDev ? "development" : "production" } }
);
console.log("STATSIG USER ID:", userID);
