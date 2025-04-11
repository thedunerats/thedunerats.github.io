import { Graphic } from '../models/Graphic'
import GraphicOnDisplayList from '../components/GraphicOnDisplayList'
import './css/App.css'

function GraphicDesignPage() {

  const items = [
    new Graphic("1", 'Item 1'),
    new Graphic("2", 'Item 2'),
  ];

  return (
      <GraphicOnDisplayList graphics={items}/>

  )
}

export default GraphicDesignPage