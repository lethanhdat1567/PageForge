import https from "@/lib/http";
import { cookies } from "next/headers";

async function AdminPage() {
  const cookiesStore = await cookies();
  const sessionToken = cookiesStore.get("sessionToken");

  const result = await https.get("/test", {
    headers: {
      Authorization: `Bearer ${sessionToken?.value}`,
    },
  });

  return <div>{result.payload.data}</div>;
}

export default AdminPage;
