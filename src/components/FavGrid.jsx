import FavCard from "../commons/FavCard"

const FavGrid = ({ dataList, type, user }) => {

  return (
    <div className="columns is-multiline layout">
      {dataList.map((elem, i) => (
        <div className="column" key={i}>
          <FavCard data={elem} type={type} user={user} dataList={dataList} />
        </div>
      ))}
    </div>
  )
}

export default FavGrid
