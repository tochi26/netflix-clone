import React, { useState } from 'react'

const Netflix = () => {

    const [isScrolled, setisScrolled] = useState(false)

    window.onscroll = () => {
        setisScrolled(window.pageYOffset === 0 ? false : true)
        return () => (window.onscroll = null)
    }
    console.log(isScrolled)
    return (
        <div className='hero'>
            <img src='https://res.cloudinary.com/ehizeex-shop/image/upload/v1668267540/NetflixApp/avengers-age-of-ultron-team-together-poster-wallpaper-1600x600-92751_84_qvwbif.jpg'
                alt='hero img'
            />
            <img src='https://res.cloudinary.com/ehizeex-shop/image/upload/v1668267540/NetflixApp/avengers-age-of-ultron-team-together-poster-wallpaper-1600x600-92751_84_qvwbif.jpg'
                alt='hero img'
            />
            <img src='https://res.cloudinary.com/ehizeex-shop/image/upload/v1668267540/NetflixApp/avengers-age-of-ultron-team-together-poster-wallpaper-1600x600-92751_84_qvwbif.jpg'
                alt='hero img'
            />
            <img src='https://res.cloudinary.com/ehizeex-shop/image/upload/v1668267540/NetflixApp/avengers-age-of-ultron-team-together-poster-wallpaper-1600x600-92751_84_qvwbif.jpg'
                alt='hero img'
            />
        </div>
    )
}

export default Netflix
