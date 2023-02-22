import React from 'react'
import {
	AboutUs,
	Chef,
	FindUs,
	Footer,
	Gallery,
	Header,
	Intro,
	Laurels,
	Menu,
} from './container'
import { Navbar } from './components'
import './App.scss'

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Header />
			<AboutUs />
			<Menu />
			<Chef />
			<Intro />
			<Laurels />
			<Gallery />
			<FindUs />
			<Footer />
		</div>
	)
}

export default App
