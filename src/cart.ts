export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

export type Coupon = {
  code: string;
  percentOff: number;
};

export function calculateSubtotal(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

/** Apply a percentage coupon to the cart subtotal. */
export function applyCoupon(subtotal: number, coupon: Coupon): number {
  const discountAmount = subtotal * (coupon.percentOff / 100);
  return subtotal - discountAmount;
}

export function calculateTotal(items: CartItem[], coupon?: Coupon): number {
  const subtotal = calculateSubtotal(items);
  if (!coupon) {
    return subtotal;
  }
  return applyCoupon(subtotal, coupon);
}
