const PORTAL_ID = "246258605";
const FORM_GUID = "c702ab87-4ac4-4fcf-adcd-80603639cb6e";

export async function submitToHubspot(data: Record<string, string>) {
  const fields = Object.entries(data).map(([name, value]) => ({ name, value }));

  const res = await fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_GUID}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fields }),
    }
  );

  if (!res.ok) throw new Error("HubSpot submission failed");
  return res.json();
}
