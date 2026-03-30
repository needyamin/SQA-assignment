import http from "k6/http";
import { check } from "k6";

export const options = {
  stages: [
    { duration: "30s", target: 50 },
    { duration: "30s", target: 100 },
    { duration: "30s", target: 0 },
  ],
  thresholds: {
    http_req_failed: ["rate<0.02"],
    http_req_duration: ["p(95)<1500"],
  },
};

export default function () {
  const payload = JSON.stringify({ query: "privacy" });
  const params = { headers: { "Content-Type": "application/json" } };

  const res = http.post("http://localhost:8000/generate", payload, params);
  check(res, {
    "status is 200": (r) => r.status === 200,
  });
}
