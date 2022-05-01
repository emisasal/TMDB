import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { getFavMovies } from "../store/favMovies"
import { getFavShows } from "../store/favShows"
import Card from "../commons/Card"

const Grid = ({ dataList, type }) => {
  const { favMovies, favShows, user } = useSelector(state => state)
  const dispatch = useDispatch()

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 4,
    slidesToShow: 5,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          // initialSlide: 1,
          dots: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          dots: false,
        },
      },
    ],
  }

  useEffect(() => {
    dispatch(getFavMovies())
    dispatch(getFavShows())
  }, [dispatch])

  return (
    <>
      <div>
        <Slider {...settings}>
          {dataList.map((elem, i) => (
            <div className="column" key={i}>
              <Card
                data={elem}
                type={type}
                movies={favMovies}
                shows={favShows}
                user={user}
              />
              <br />
            </div>
          ))}
        </Slider>
      </div>
      <br />
    </>
  )
}

export default Grid
