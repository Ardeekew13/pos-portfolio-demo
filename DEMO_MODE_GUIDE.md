# Demo Mode Conversion Guide

## Overview
This POS system has been configured as a READ-ONLY demo for portfolio purposes.

## Changes Made

### 1. Authentication Removed
- ✅ `app/page.tsx` - Auto-redirects to dashboard (no login form)
- ✅ `app/(main)/layout.tsx` - Removed AuthGuard wrapper
- ✅ `utils/demoMode.ts` - Created DEMO_MODE constant

### 2. Navbar Updated
- ❌ Needs update to show "READ-ONLY DEMO" badge
- ❌ Remove logout button
- ❌ Remove user profile dropdown

### 3. Product Module
- ✅ `app/(main)/product/page.tsx` - Hidden "Add Product" button
- ❌ `component/product/productListTable.tsx` - Hide Edit/Delete buttons
- ❌ `component/product/inactiveProductListTable.tsx` - Hide Edit/Delete buttons  
- ❌ `component/product/dialog/addProductDialog.tsx` - Disable (won't be opened)

### 4. Inventory Module
- ❌ `app/(main)/inventory/page.tsx` - Hide "Add Item" button
- ❌ `component/inventory/itemListTable.tsx` - Hide Edit/Delete buttons
- ❌ `component/inventory/inactiveItemListTable.tsx` - Hide Edit/Delete buttons
- ❌ `component/inventory/dialog/addItemDialog.tsx` - Disable

### 5. Transaction Module
- ❌ `component/transaction/transactionListTable.tsx` - Hide Delete button
- ❌ Remove void/refund functionality

### 6. Point of Sale
- ❌ `app/(main)/point-of-sale/page.tsx` - Disable checkout/payment
- ❌ Show "DEMO MODE - Transactions disabled" message
- ❌ Allow browsing but prevent actual transactions

### 7. Cash Drawer
- ❌ `app/(main)/cash-drawer/page.tsx` - Hide add cash in/out buttons
- ❌ Make read-only view

### 8. Settings Module  
- ❌ `component/settings/UserManagement.tsx` - Hide Add/Edit/Delete users
- ❌ `component/settings/DiscountConfiguration.tsx` - Hide Add/Edit/Delete
- ❌ `component/settings/ServiceChargeConfiguration.tsx` - Hide Add/Edit/Delete
- ❌ `component/settings/DatabaseMonitoring.tsx` - Keep read-only

### 9. Common Components
- ❌ `component/common/PasswordConfirmation.tsx` - Disable or remove

## How to Use DEMO_MODE

Import and use in components:
\`\`\`typescript
import { DEMO_MODE } from "@/utils/demoMode";

// Conditional rendering
{!DEMO_MODE && (
  <Button onClick={handleAdd}>Add Item</Button>
)}

// Or disable buttons
<Button disabled={DEMO_MODE} onClick={handleEdit}>Edit</Button>
\`\`\`

## To Restore Full Functionality
Set `DEMO_MODE = false` in `utils/demoMode.ts`
