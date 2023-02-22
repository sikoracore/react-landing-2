import React from 'react'
import { SubHeading } from '../../components'
import { images } from '../../constants'
import './Main.scss'

const Main = () => {
	return (
		<div className='main wrapper section__padding' id='home'>
			<div className='wrapper__info'>
				<SubHeading title='Chase the new flavour' />
				<h1 className='main__title'>The Key To Fine Dining</h1>
				<p className='p__opensans' style={{ margin: '2rem 0' }}>
					Sit tellus lobortis sed senectus vivamus molestie. Condimentum
					volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
					aliquam amet tellus
				</p>
				<button type='button' className='custom__button'>
					Explore Menu
				</button>
			</div>

			<div className='wrapper__img'>
				<img src={images.welcome} alt='mainImage' />
			</div>
		</div>
	)
}

export default Main
