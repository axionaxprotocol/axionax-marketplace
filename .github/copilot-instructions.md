# Axionax Marketplace - Copilot Instructions
# Target Model: Claude 4.5 Sonnet

**Context:** Decentralized Compute Marketplace (React, TypeScript, Web3 Integration).

## 💰 ECONOMIC & SECURITY RULES
1.  **Transaction Safety:**
    - Double-check token decimals (18 decimals for AXX). Use `BigInt` or `ethers.parseUnits` strictly. NEVER use JavaScript `number`.
    - Validate wallet connection state before initiating any transaction.

2.  **State Management:**
    - Use Optimistic UI updates for better UX, but handle rollback on failure.
    - Handle "Loading," "Success," and "Error" states explicitly.

3.  **Component Architecture:**
    - Separate "Smart Components" (Logic) from "Dumb Components" (UI).
    - Use `React.memo` for high-frequency update lists (Order Books).

4.  **Input Validation:**
    - Sanitize all user inputs (Price, Duration, Specs).
    - Prevent submission of negative numbers or zero values.
