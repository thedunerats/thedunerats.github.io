import { Graphic } from '../models/Graphic';

// THIS INTERFACE PASSES INTO THE GRAPHIC LIST COMPONENT
// IT ACTS AS A LIST OF GRAPHICS
// REMEMBER, YOU CAN'T INSTANTIATE IT IF YOU CALL IT AS AN INTERFACE.
// THIS IS MERELY A PASS THROUGH TO MIMIC A STRUCTURAL DIRECTIVE
interface IProps {
   graphics: Graphic[]
}

// THIS IS THE INTERFACE FOR THE BASE GRAPHIC COMPONENT
// THIS IS NEEDED TO PASS AN OBJECT INTO A COMPONENT THROUGH TYPESCRIPT
interface GProps {
    graphic: Graphic
}

function GraphicComponent({ graphic }: GProps) {
    // return <div className="graphic-card">
    //     <div className="graphic-file">
    //         <img src={graphic.location} alt={graphic.name}/>
    //         <h3>{graphic.name}</h3>
    //     </div>
    // </div>
    return <td>
        <h3>{graphic.name}</h3>
    </td>
  }

// THIS DOUBLE COMPONENT DESIGN IS SUPPOSED TO REPLICATE THE *NGFOR 
// DIRECTIVE FROM ANGULAR
// USE THE DISPLAY LIST AND PASS AN OBJECT ARRAY IN TO CONTROL HOW MANY GO IN
function GraphicOnDisplayList({ graphics }: IProps) {
    return <table>
    <tbody>
    <tr>
        {/* <td> */}
            {graphics.map((item, index) => (
            <GraphicComponent key={index} graphic={item} />
            ))}
        {/* </td> */}
    </tr>
    </tbody>
  </table>
}

export default GraphicOnDisplayList