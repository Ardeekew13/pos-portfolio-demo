import bcrypt from "bcryptjs";
import User, { UserRole } from "@/app/api/graphql/models/User";

export async function seedDefaultUser() {
  try {
    // Check if any users exist
    const userCount = await User.countDocuments();
    
    if (userCount === 0) {
      console.log("👤 No users found. Creating default admin user...");
      
      // Create default admin user
      const hashedPassword = await bcrypt.hash("admin123", 10);
      
      const defaultAdmin = await User.create({
        username: "admin",
        password: hashedPassword,
        role: UserRole.SUPER_ADMIN,
        firstName: "System",
        lastName: "Administrator",
        isActive: true,
        permissions: {},
      });
      
      console.log("✅ Default admin user created successfully");
      console.log("   Username: admin");
      console.log("   Password: admin123");
      console.log("   Role: SUPER_ADMIN");
      console.log("   ⚠️  Please change the password after first login!");
    } else {
      console.log(`✅ Database already has ${userCount} user(s)`);
    }
  } catch (error: any) {
    // Ignore duplicate key errors (user already exists)
    if (error.code === 11000) {
      console.log("✅ Default user already exists");
    } else {
      console.error("❌ Error seeding default user:", error.message);
    }
  }
}
