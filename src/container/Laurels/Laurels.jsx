import React from 'react'
import { AwardCard, SubHeading } from '../../components'
import { images, data } from '../../constants'
import './Laurels.scss'


const Laurels = () => {
	return (
		<div className='bg wrapper section__padding' id='awards'>
			<div className='wrapper__info'>
				<SubHeading title='Awards & recognition' />
				<h1 className='headtext__cormorant'>Our Laurels</h1>

				<div className='laurels'>
					{data.awards.map((award) => (
						<AwardCard award={award} key={award.title} />
					))}
				</div>
			</div>

			<div className='wrapper__img'>
				<img src={images.laurels} alt='laurels_img' />
			</div>
		</div>
	)
}

export default Laurels
