const express = require("express");
const cors = require("cors");
const crypto = require("crypto");
const { Cashfree } = require("cashfree-pg");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error("Missing CLIENT_ID or CLIENT_SECRET in .env");
  process.exit(1);
}

// Instantiate Cashfree client
const cashfree = new Cashfree(Cashfree.SANDBOX, CLIENT_ID, CLIENT_SECRET);

function generateOrderId() {
  return crypto.randomBytes(8).toString("hex");
}

// Create order route
app.get("/payment", async (req, res) => {
  try {
    const orderId = generateOrderId();
    const orderRequest = {
      order_amount: 1.0,
      order_currency: "INR",
      order_id: orderId,
      customer_details: {
        customer_id: "webcodder01",
        customer_phone: "9999999999",
        customer_name: "Web Codder",
        customer_email: "webcodder@example.com",
      },
      // optionally order_meta or other optional fields per docs
    };

    const response = await cashfree.PGCreateOrder(orderRequest);
    return res.json(response.data);
  } catch (error) {
    console.error("Create order error:", error);
    return res.status(500).json({ error: error.message });
  }
});

// Verify / fetch order route
app.get("/verify/:orderId", async (req, res) => {
  try {
    const { orderId } = req.params;
    const response = await cashfree.PGFetchOrder(orderId);
    return res.json(response.data);
  } catch (error) {
    console.error("Fetch order error:", error);
    return res.status(500).json({ error: error.message });
  }
});

app.listen(8000, () => {
  console.log("✅ Server running on port 8000");
});
