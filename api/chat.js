// Vercel serverless funksiya: portfolio AI yordamchisi.
// Kalit faqat serverda turadi (brauzerga chiqmaydi).
export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "POST kerak" });

  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) return res.status(503).json({ error: "API kalit sozlanmagan" });

  const { messages = [], context = "" } = req.body || {};

  // Xarajatni cheklash: oxirgi 8 ta xabar, har biri 500 belgigacha
  let clean = (Array.isArray(messages) ? messages : [])
    .slice(-8)
    .map((m) => ({
      role: m.role === "assistant" ? "assistant" : "user",
      content: String(m.content || "").slice(0, 500),
    }));
  while (clean.length && clean[0].role !== "user") clean.shift();
  if (!clean.length) return res.status(400).json({ error: "Xabar yo'q" });

  const system =
    "Sen shaxsiy portfolio saytidagi yordamchisan. Faqat quyidagi ma'lumot asosida, qisqa (2-4 gap) va do'stona o'zbek tilida javob ber. " +
    "Ma'lumotda yo'q narsani o'ylab topma, bilmasang aloqa ma'lumotlarini ayt.\n\nMa'lumot: " +
    String(context).slice(0, 3000);

  try {
    const r = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": key,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: process.env.ANTHROPIC_MODEL || "claude-haiku-5-5",
        max_tokens: 300,
        system,
        messages: clean,
      }),
    });
    if (!r.ok) return res.status(502).json({ error: "AI xizmati javob bermadi" });

    const data = await r.json();
    const reply = (data.content || []).filter((b) => b.type === "text").map((b) => b.text).join("");
    return res.status(200).json({ reply });
  } catch {
    return res.status(502).json({ error: "Ulanish xatosi" });
  }
}
