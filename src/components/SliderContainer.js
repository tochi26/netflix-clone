import React from 'react'
import styled from 'styled-components'
import MovieSlider from './MovieSlider'

const SliderContainer = ({ movies }) => {

    const getMoviesBetween = (start, end) => {
        return movies.slice(start, end)
    }
    return (
        <SlidderWrapper>
            <MovieSlider data={getMoviesBetween(0, 10)} title="Only On Netflix" />
            <MovieSlider data={getMoviesBetween(10, 20)} title="Popular On Netflix" />
            <MovieSlider data={getMoviesBetween(20, 30)} title="Action Movies" />
            <MovieSlider data={getMoviesBetween(40, 50)} title="Romantic Movies" />
            <MovieSlider data={getMoviesBetween(60, 70)} title="Epic" />
            <MovieSlider data={getMoviesBetween(70, 80)} title="Trending now" />
        </SlidderWrapper>
    )
}
const SlidderWrapper = styled.div`

`

export default SliderContainer