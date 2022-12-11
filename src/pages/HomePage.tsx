import React from 'react';
import Header from '../components/Header';
import EstadoSelectMenu from '../components/EstadoSelectMenu';
import CitySelectMenu from '../components/CitySelectMenu';
import CityInfo from '../components/CityInfo';


export default function HomePage() {
	return (
		<>
			<Header />
			<div className="relative max-w-4xl min-h-[300px] mx-auto p-4 mt-8 mb-12 md:flex flex-wrap items-start gap-6 space-y-6 md:space-y-0 justify-start rounded-xl bg-gradient-to-r from-secondary to-secondary-focus/60">
			<EstadoSelectMenu />
			<CitySelectMenu />
			<CityInfo />
			</div>
		</>
	);
};
