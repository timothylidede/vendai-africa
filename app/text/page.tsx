import SiteHeader from '@/components/SiteHeader';

const clients = [
	'Charli XCX',
	'Civilian Projects',
	'Emily Dawn Long',
	'Humanscale',
	'John Chamberlain Estate',
	'Louis Vuitton',
	'OMA',
	'Republic Records',
	'The Dare',
	'Universal Music Group',
	'USM',
	'Yale University',
	'Etc.',
];

const services = [
	'Art Direction',
	'Campaign',
	'Identity Design',
	'Packaging',
	'Publication Design',
	'Typeface Design',
	'Brand Strategy',
	'Content Strategy',
	'Creative Direction',
	'Design Research',
	'Naming',
	'Environmental Design',
	'Exhibition Design',
	'Interior Design',
	'Product Design',
	'Signage & Wayfinding',
	'Interface Design',
	'Mobile Design',
	'Website Design',
	'User Experience',
];

export default function TextPage() {
	return (
		<main className="min-h-screen bg-white text-black">
			<SiteHeader context="text" />
			<div className="mx-auto max-w-4xl px-[5%] pt-32 pb-24 space-y-16">
				<section className="space-y-4">
					<h2 className="font-mono uppercase text-[11px] tracking-[0.2em]">
						General
					</h2>
					<p className="text-sm leading-relaxed">
						HSO is a design office in New York. Founded by Jake Truax and Jake
						Brussel Faria, the office provides services in design and creative
						direction across mediums and circumstances.
					</p>
					<p className="text-sm leading-relaxed">
						We help our clients to answer questions like, "what should this look
						like?" and "how do we do this?" Whether the answer is a brand, a
						campaign, a book, a website or a chair we believe that successful
						projects come from a strong, shared understanding of the objectives and
						context.
					</p>
					<p className="text-sm leading-relaxed">
						Every field and scale has its own challenges. A big enough brand
						becomes a logistics problem. A big enough chair becomes architecture.
						For those projects that push the edges of design or have other unusual
						requirements, the office has collaborators across fields from engineering
						to architecture to sustainability.
					</p>
				</section>

				<section className="space-y-4">
					<h2 className="font-mono uppercase text-[11px] tracking-[0.2em]">
						Clients
					</h2>
					<ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-sm">
						{clients.map((client) => (
							<li key={client}>{client}</li>
						))}
					</ul>
				</section>

				<section className="space-y-4">
					<h2 className="font-mono uppercase text-[11px] tracking-[0.2em]">
						Services
					</h2>
					<ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-sm">
						{services.map((service) => (
							<li key={service}>{service}</li>
						))}
					</ul>
				</section>

				<section className="space-y-4">
					<h2 className="font-mono uppercase text-[11px] tracking-[0.2em]">
						Contact
					</h2>
					<div className="space-y-2 text-sm">
						<div>
							<p className="uppercase tracking-wide text-xs opacity-70">Email</p>
							<div className="flex flex-wrap items-center gap-4">
								<a
									href="mailto:services@hso.nyc"
									className="underline"
								>
									services@hso.nyc
								</a>
								<span className="opacity-60">Copy</span>
							</div>
						</div>
						<div>
							<p className="uppercase tracking-wide text-xs opacity-70">Instagram</p>
							<a
								href="https://instagram.com/hso.nyc"
								target="_blank"
								rel="noreferrer"
								className="underline"
							>
								@hso.nyc
							</a>
						</div>
						<div>
							<p className="uppercase tracking-wide text-xs opacity-70">Copyright</p>
							<p>Copyright (c) Henry Street Office, Inc.</p>
						</div>
					</div>
				</section>
			</div>
		</main>
	);
}
