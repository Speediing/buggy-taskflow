# Buggy TaskFlow

Small demo product used by the **support-agent-demo** to showcase Cursor cloud agents finding and fixing customer-reported bugs.

## Planted bug

Applying a coupon **increases** the cart total instead of decreasing it. The sign error lives in `src/cart.ts` (`applyCoupon` adds the discount instead of subtracting it).

## Scripts

```bash
npm install
npm test
npm run build
```
