import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    customerName: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    fullAddress: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    pincode: { type: String, required: true },
    area: { type: String, required: true },
    deliveryType: { type: String, enum: ["Standard Delivery", "Express Delivery"], default: "Standard Delivery" },
    paymentMethod: {
      type: String,
      enum: ["UPI", "Debit Card", "Credit Card", "Net Banking", "Cash on Delivery"],
      required: true,
    },
    orderStatus: { type: String, default: "Pending" },
    products: [
      {
        productId: { type: Number, required: true },
        productName: { type: String, required: true },
        size: { type: String, required: true },
        quantity: { type: Number, required: true, default: 1 },
        price: { type: Number, required: true },
        total: { type: Number, required: true },
      },
    ],
    totalPrice: { type: Number, required: true },
    discount: { type: Number, default: 0 },
    deliveryCharge: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);
export default Order;
