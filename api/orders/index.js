export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      // 👉 Replace this with your real DB / logic
      const orders = []; // fetch from DB

      res.status(200).json({ success: true, orders });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }
}
