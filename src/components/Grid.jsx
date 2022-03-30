
import Card from "../commons/Card"

const Grid = ({ dataList, type }) => {

  return (
    <div className="columns is-multiline layout">
      {dataList.map((elem, i) => (
        <div className="column" key={i}>
          <Card data={elem} type={type} />
        </div>
      ))}
    </div>
  )
}

export default Grid
