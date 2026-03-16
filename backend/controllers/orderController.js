import Order from "../models/Order.js";

export const createOrder = async (req, res) => {
  try {
    const {
      customerName,
      phone,
      email,
      fullAddress,
      city,
      state,
      pincode,
      area,
      products,
      totalPrice,
      paymentMethod,
      deliveryType,
      discount,
      deliveryCharge,
      orderStatus,
    } = req.body;

    if (
      !customerName ||
      !phone ||
      !email ||
      !fullAddress ||
      !city ||
      !state ||
      !pincode ||
      !area ||
      !products ||
      products.length === 0 ||
      totalPrice === undefined ||
      !paymentMethod ||
      !deliveryType
    ) {
      return res.status(400).json({ success: false, message: "Missing required order fields." });
    }

    const order = new Order({
      customerName,
      phone,
      email,
      fullAddress,
      city,
      state,
      pincode,
      area,
      deliveryType,
      paymentMethod,
      orderStatus: orderStatus || "Pending",
      products,
      totalPrice,
      discount: discount || 0,
      deliveryCharge: deliveryCharge || 0,
    });

    const savedOrder = await order.save();
    return res.status(201).json({ success: true, order: savedOrder });
  } catch (error) {
    console.error("Error creating order:", error);
    return res.status(500).json({ success: false, message: "Unable to create order." });
  }
};

export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ success: false, message: "Order not found." });
    }
    return res.json({ success: true, order });
  } catch (error) {
    console.error("Error fetching order:", error);
    return res.status(500).json({ success: false, message: "Unable to fetch order." });
  }
};
