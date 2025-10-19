import Link from 'next/link';

interface SiteHeaderProps {
	context?: 'visual' | 'text' | 'contact';
}

export default function SiteHeader({ context = 'visual' }: SiteHeaderProps) {
	const vendaiHref = context === 'contact' ? '/' : '/contact';

	return (
		<header className="fixed top-8 left-0 right-0 z-20 pointer-events-none">
			<div className="mx-auto max-w-[1250px] px-[5%] font-mono uppercase text-[11px] font-semibold text-black pointer-events-auto">
				<div className="flex flex-col gap-1">
					<Link href={vendaiHref} className="tracking-[0.2em] hover:opacity-60 transition-opacity">
						Vendai
					</Link>
					{context !== 'contact' ? (
						<div className="flex items-center gap-1 normal-case tracking-normal">
							<Link
								href="/"
								className="uppercase hover:opacity-60 transition-opacity"
							>
								Visual
							</Link>
							<span className="text-black/40">/</span>
							<Link
								href="/text"
								className="uppercase hover:opacity-60 transition-opacity"
							>
								Text
							</Link>
						</div>
					) : null}
				</div>
			</div>
		</header>
	);
}
