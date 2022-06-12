import { Link, useParams } from 'react-router-dom';
import './Details.css'

const Details = ({data})=> {
    let params = useParams();
    const test = (data.filter(el=>(el.id===params.id))[0])
  return (
    <div className="conatinerdetailsgeneral">
        <div className='containerDetails'>
            <div className="affiche">
                <img src={test.urlImage} alt="" />
            </div>
            <div className="information">
                <h1>{test.title}</h1>
                <div className="trailer">
                    <h4>trailer</h4>
                    {test.trailer.map(el=><span>{el}</span>)}
                </div>
                <div className='ratingandduration'>
                {test.rating} <img src='https://upload.wikimedia.org/wikipedia/commons/9/99/Star_icon_stylized.svg' alt='rating'/> <span>{test.date} / {test.duration}Min</span>
                </div>
                <p className="description">{test.desc}</p>
            
                </div>
                <Link to="/">
                    <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c451.png" alt="" className='retourbutton'/>
                </Link>
                    
            </div>
        </div>
  
  )
}

export default Details