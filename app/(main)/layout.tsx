"use client";
import OfflineIndicator from "@/component/common/OfflineIndicator";
import dynamic from "next/dynamic";

const NavbarLayout = dynamic(() => import("@/component/Navbar"), {
	ssr: false,
});

export default function MainLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<OfflineIndicator />
			<NavbarLayout>{children}</NavbarLayout>
		</>
	);
}
