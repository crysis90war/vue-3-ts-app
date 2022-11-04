export const periods = ["Today", "This Week", "This Month"] as const;
export type Period = typeof periods[number];

export const brands = [
  "",
  "BMW",
  "Mercedes-Benz",
  "Mini Cooper",
  "Audi",
  "Volvo",
  "Tesla",
] as const;
export type Brand = typeof brands[number];

export function useConstants() {
  return {
    STATUS_CODE: {
      OK: 200,
      CREATED: 201,
      ACCEPTED: 202,
      NO_CONTENT: 204,
      BAD_REQUEST: 400,
      UNAUTHORIZED: 401,
      FORBIDDEN: 403,
      NOT_FOUND: 404,
      INTERNAL_SERVER_ERROR: 500,
      BAD_GATEWAY: 502,
    },
  };
}
