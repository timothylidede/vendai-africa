'use client';

import { useState } from 'react';

const email = 'hello@vendai.digital';

export default function GetInTouchPanel() {
	const [copied, setCopied] = useState(false);

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(email);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch (error) {
			console.error('Failed to copy email', error);
		}
	};

	return (
		<div className="flex min-h-screen items-center justify-center px-6">
			<div className="relative group text-center">
				<div className="text-base tracking-[0.2em] uppercase transition-opacity duration-200 group-hover:opacity-0">
					Get in touch
				</div>
				<div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-0 transition-opacity duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
					<button
						onClick={handleCopy}
						type="button"
						className="font-mono text-sm uppercase tracking-[0.15em] hover:opacity-70"
					>
						{email}
					</button>
					<button
						onClick={handleCopy}
						type="button"
						className="text-sm text-[#6c4dff] hover:opacity-70"
					>
						Copy
					</button>
					{copied ? (
						<span className="text-xs uppercase tracking-[0.2em] text-black/60">
							Copied
						</span>
					) : null}
				</div>
			</div>
		</div>
	);
}
