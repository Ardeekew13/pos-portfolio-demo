# Modern POS & Inventory Management System

A production-ready Point of Sale and Inventory Management system featuring real-time stock tracking, role-based access control, offline support, and automated resource management.

## 🚀 Features

### Core Functionality
- 🛒 **Point of Sale** - Fast checkout with product search and cart management
- 📦 **Inventory Management** - Real-time stock tracking and low-stock alerts
- 👥 **Employee Management** - Shift tracking with photo verification
- 💰 **Cash Drawer** - Multi-cashier support with transaction tracking
- 📊 **Analytics Dashboard** - Sales analytics with interactive charts
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile devices

### Advanced Features
- 🔐 **Role-Based Access Control** - Granular permissions (Admin, Manager, Cashier)
- 🌐 **Offline Support** - PWA with offline-first capabilities
- �� **Photo Management** - Cloudinary integration with automatic cleanup
- 💾 **Data Export** - Export to Excel (transactions, inventory, cash drawer)
- ⚡ **Real-time Updates** - GraphQL subscriptions and optimistic UI
- 🔄 **Automatic Cleanup** - Scheduled photo cleanup saves $1,068/year

## 🛠️ Tech Stack

**Frontend**
- Next.js 16 (App Router)
- React 19
- TypeScript
- Ant Design (UI Components)
- Apollo Client (GraphQL)
- ApexCharts/Recharts (Analytics)

**Backend**
- GraphQL with Apollo Server
- Next.js API Routes
- JWT Authentication

**Database & Storage**
- MongoDB with Mongoose
- Cloudinary (Image Storage)

**DevOps**
- Vercel (Hosting & Cron Jobs)
- ESLint
- GraphQL Code Generator

## 📦 Installation

```bash
# Clone repository
git clone <your-repo-url>
cd pos-portfolio-system

# Install dependencies
npm install
```

## 🔧 Environment Variables

Create a `.env.local` file in the root directory:

```env
# MongoDB
MONGODB_URI=your_mongodb_connection_string

# JWT Authentication
JWT_SECRET=your_jwt_secret_key

# Cloudinary (Image Storage)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Cron Jobs (Vercel)
CRON_SECRET=your_cron_secret
```

## 🚀 Running Locally

```bash
# Development mode (with Turbopack)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Generate GraphQL types
npm run codegen
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 👤 Default Login Credentials

**Admin Account:**
- Username: `admin`
- Password: `admin123`

> ⚠️ **Security Note:** Change default credentials in production!

## 📊 Key Technical Highlights

### Architecture Decisions
- **Apollo Client Cache Strategy** - Network-only fetch policy prevents stale data after authentication changes
- **Optimistic UI Updates** - Instant feedback for mutations with automatic rollback on errors
- **Image Optimization** - 1920×1080 @ 85% quality for clear attendance verification
- **Automatic Resource Management** - Cron jobs delete photos older than 12 months to stay within free tier limits

### Performance Optimizations
- Server-side rendering with Next.js App Router
- Code splitting and lazy loading
- GraphQL query batching and deduplication
- Indexed MongoDB queries for fast lookups
- Image CDN with Cloudinary transformations

### Security Features
- JWT token-based authentication
- HTTP-only cookies for token storage
- Role-based permission system (module + action based)
- Input validation and sanitization
- Protected API routes

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── (main)/            # Protected routes
│   ├── api/               # API routes & GraphQL
│   └── page.tsx           # Login page
├── component/             # React components
│   ├── auth/              # Authentication components
│   ├── common/            # Shared components
│   ├── dashboard/         # Dashboard components
│   ├── inventory/         # Inventory components
│   ├── point-of-sale/     # POS components
│   └── settings/          # Settings components
├── docs/                  # Technical documentation
├── graphql/               # GraphQL queries & mutations
├── hooks/                 # Custom React hooks
├── lib/                   # Utilities & configurations
├── utils/                 # Helper functions
└── public/                # Static assets
```

## 🎯 Use Cases

This system is designed for:
- Small to medium retail businesses
- Restaurants and cafes
- Convenience stores
- Pop-up shops and events
- Any business requiring inventory and sales tracking

## 📸 Screenshots

> Add screenshots of your application here

## 💡 Future Enhancements

- [ ] Multi-location support
- [ ] Advanced reporting (profit/loss, trends)
- [ ] Customer loyalty program
- [ ] Email/SMS notifications
- [ ] Barcode scanning
- [ ] Receipt printing
- [ ] Tax calculation by region

## 📄 Documentation

Detailed documentation available in the `/docs` folder:
- **DATABASE_OPTIMIZATION.md** - Database schema and indexing strategies
- **OFFLINE_ARCHITECTURE.md** - Offline-first PWA implementation
- **PHOTO_CLEANUP.md** - Automatic photo cleanup system
- **SECURITY_AUDIT.md** - Security best practices and audit
- **SHIFT_TRACKING.md** - Employee shift management
- And more...

## 🧪 Testing

```bash
# Run tests (when implemented)
npm test
```

## 📊 Cost Analysis

**Cloudinary Free Tier Management:**
- Storage: ~1-2GB stable with automatic cleanup
- Bandwidth: ~3.6GB/month (14% of 25GB limit)
- **Annual Savings:** $1,068 by staying in free tier

## 📝 License

This project is available for portfolio use. Please provide attribution if you use this code.

## 👨‍�💻 Developer

**Your Name**
- Portfolio: [your-portfolio-link]
- GitHub: [your-github]
- Email: [your-email]

---

Built with ❤️ using Next.js, GraphQL, and MongoDB
