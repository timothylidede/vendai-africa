import InfiniteGallery from '@/components/InfiniteGallery';
import SiteHeader from '@/components/SiteHeader';

export default function Home() {
	const sampleImages = [
		{ src: '/pretoria.png', alt: 'Pretoria cityscape' },
		{ src: '/cairo.png', alt: 'Cairo skyline' },
		{ src: '/algiers.png', alt: 'Algiers waterfront' },
		{ src: '/abuja.png', alt: 'Abuja skyline' },
		{ src: '/rabat.png', alt: 'Rabat coastal view' },
		{ src: '/nairobi.png', alt: 'Nairobi skyline' },
		{ src: '/addis-ababa.png', alt: 'Addis Ababa skyline' },
		{ src: '/luanda.png', alt: 'Luanda harbor' },
		{ src: '/yamoussoukro.png', alt: 'Yamoussoukro basilica' },
		{ src: '/accra1.png', alt: 'Accra waterfront' },
		{ src: '/abuja1.png', alt: 'Abuja skyline' },
		{ src: '/rabat1.png', alt: 'Rabat coastal view' },
		{ src: '/nairobi1.png', alt: 'Nairobi skyline' },
		{ src: '/nairobi2.png', alt: 'Nairobi skyline' },
		{ src: '/accra.png', alt: 'Accra waterfront' },
	];

	return (
		<main className="min-h-screen ">
			<SiteHeader context="visual" />
			<InfiniteGallery
				images={sampleImages}
				speed={1.2}
				zSpacing={3}
				visibleCount={12}
				falloff={{ near: 0.8, far: 14 }}
				className="h-screen w-full rounded-lg overflow-hidden"
			/>
			<div className="h-screen inset-0 pointer-events-none fixed flex items-center justify-center text-center px-3 mix-blend-exclusion text-white">
				<h1 className="font-serif text-4xl md:text-7xl tracking-tight">
					Pan-African Wholesale Merchandiser
				</h1>
			</div>

			<div className="text-center fixed bottom-10 left-0 right-0 font-mono uppercase text-[11px] font-semibold">
				<p>Use mouse wheel, arrow keys, or touch to navigate</p>
				<p className=" opacity-60">
					Auto-play resumes after 3 seconds of inactivity
				</p>
			</div>
		</main>
	);
}
