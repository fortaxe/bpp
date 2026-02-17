import './PageHeader.css'
import {BiRightArrow} from 'react-icons/bi'


const PageHeader = ({heading, path}) => {
  return (
    <div className='pageHeader urlPath'>
         <div className=''>
                <h1>{heading}</h1> 
                <h3>Home <BiRightArrow/>{path}</h3>                                                                                       
        </div>
    </div>
  )
}

export default PageHeader