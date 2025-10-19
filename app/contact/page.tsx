import SiteHeader from '@/components/SiteHeader';
import GetInTouchPanel from '@/components/GetInTouchPanel';

export default function ContactPage() {
	return (
		<main className="min-h-screen bg-white text-black">
			<SiteHeader context="contact" />
			<GetInTouchPanel />
		</main>
	);
}
