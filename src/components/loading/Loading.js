import React from 'react'

const Loading = () => {
  return (
    <div className="preloader wow fadeOut" data-wow-duration="1s" data-wow-delay=".1s">
		<div className="preloader-inner">
			<div className="preloader-icon">
				<span></span>
				<span></span>
			</div>
		</div>
	</div>
  )
}

export default Loading