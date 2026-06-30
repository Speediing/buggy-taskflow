import { describe, expect, it } from "vitest";
import { calculateSubtotal, calculateTotal, type CartItem, type Coupon } from "../src/cart.js";

const sampleItems: CartItem[] = [
  { id: "1", name: "Pro Plan", price: 100, quantity: 1 },
  { id: "2", name: "Add-on", price: 25, quantity: 2 },
];

const tenPercentOff: Coupon = { code: "SAVE10", percentOff: 10 };

describe("cart totals", () => {
  it("calculates subtotal from line items", () => {
    expect(calculateSubtotal(sampleItems)).toBe(150);
  });

  it("reduces total when a coupon is applied", () => {
    const subtotal = calculateSubtotal(sampleItems);
    const total = calculateTotal(sampleItems, tenPercentOff);

    expect(total).toBeLessThan(subtotal);
    expect(total).toBe(135);
  });
});
