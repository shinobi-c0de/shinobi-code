// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Shinobi Code',
			logo: {
				light: './src/assets/shinobi-code-logo-black.png',
				dark: './src/assets/shinobi-code-logo-white.png',
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/shinobi-c0de' }],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Introduction', slug: 'getting-started/intro' },
						{ label: 'Usage', slug: 'getting-started/usage' },
						{ label: 'Hand Sign', slug: 'getting-started/handsign' },
						{ label: 'Jutsu', slug: 'getting-started/jutsu' },
						{ label: 'Speech', slug: 'getting-started/speech' },
					],
				},
				{
					label: 'For Developers',
					autogenerate: { directory: 'for-devs' },
				},
				{
					label: 'Others',
					items: [
						{ label: 'Detection Model', slug: 'others/model' },
						{ label: 'Known Issues', slug: 'others/issues' },
						{ label: 'Disclaimer', slug: 'others/disclaimer' },
						{ label: 'References', slug: 'others/references' },
					],
				}
			],
			components: {
				Footer: './src/components/footer.astro',
			},
			customCss: ['./src/styles/global.css'],
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
