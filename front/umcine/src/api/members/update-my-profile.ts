import { apiClient } from "../api-client";
import type { MyProfile } from "./get-my-profile";

export function updateMyProfile(accessToken: string, nickname: string) {
  return apiClient.patch("members/me", {
    headers: { Authorization: `Bearer ${accessToken}` },
    json: { nickname },
  }).json<MyProfile>();
}
