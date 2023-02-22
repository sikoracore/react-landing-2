import React, { useRef, useState } from 'react'
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs'
import { meal } from '../../constants'
import './Intro.scss'

const Intro = () => {
	const [playVideo, setPlayVideo] = useState(false)
	const vidRef = useRef();
	return (
		<div className='intro'>
			<video
				ref={vidRef}
				src={meal}
				type='video/mp4'
				loop
				controls={false}
				muted
			/>
			<div className='intro__overlay flex__center'>
				<div
					className='intro__overlay-circle flex__center'
					onClick={() => {
						setPlayVideo(!playVideo)
						if (playVideo) {
							vidRef.current.pause()
						} else {
							vidRef.current.play()
						}
					}}
				>
					{playVideo ? (
						<BsPauseFill color='#fff' fontSize={30} />
					) : (
						<BsFillPlayFill color='#fff' fontSize={30} />
					)}
				</div>
			</div>
		</div>
	)
}

export default Intro
