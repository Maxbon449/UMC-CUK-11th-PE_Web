import { apiClient } from "../api-client";

export interface MyProfile {
  email: string;
  nickname: string;
  createdAt: string;
}

export const myProfileQueryKey = ["members", "me"] as const;

export function getMyProfile(accessToken: string, signal?: AbortSignal) {
  return apiClient.get("members/me", {
    headers: { Authorization: `Bearer ${accessToken}` },
    signal,
  }).json<MyProfile>();
}
