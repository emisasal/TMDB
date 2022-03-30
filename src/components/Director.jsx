import { findDirector } from "../utils/functions"

export const Director = credits => {
  return (
    <>
      <p>Director:</p>
      {findDirector(credits.crew).map((dir, i) => (
        <p key={i}>{dir.name}</p>
      ))}
    </>
  )
}

export const Creator = (data) => {
  const noData = "No data"
  return (
    <>
      <p>Creator:</p>
      <p>{data.created_by[0]? data.created_by[0].name : noData}</p>
    </>
  )
}

export const Credits = (cast) => {
  return (
    <>
      <p>Cast:</p>
       <p>
         {cast[0].name} as {cast[0].character}
       </p>
       <p>
         {cast[1].name} as {cast[1].character}
       </p>
       <p>
         {cast[2].name} as {cast[2].character}
       </p>
       <p>
         {cast[3].name} as {cast[3].character}
       </p>
    </>
  )
}
