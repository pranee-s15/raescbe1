export default async function handler(req, res) {
  // ✅ Allow only POST method
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { email, password } = req.body;

    // ✅ Validate input
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    // 🔥 Simple demo authentication (you can replace later with DB)
    let role = "user";

    if (
      email === "admin@raesboutique.com" &&
      password === "Admin@123"
    ) {
      role = "admin";
    }

    // ✅ Success response
    return res.status(200).json({
      success: true,
      role: role,
    });

  } catch (error) {
    // ❌ Error handling
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
}