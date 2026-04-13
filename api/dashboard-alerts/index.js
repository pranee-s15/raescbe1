export default function handler(req, res) {
  if (req.method === "GET") {
    const alerts = [
      { id: 1, message: "New order received", type: "order" },
      { id: 2, message: "Stock running low", type: "inventory" },
      { id: 3, message: "New user registered", type: "user" },
    ];

    res.status(200).json({ success: true, alerts });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}