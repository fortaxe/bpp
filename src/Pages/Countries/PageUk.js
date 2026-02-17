import React from 'react'
import './PageUk.css'
import { FaCheckCircle } from 'react-icons/fa'
import CourseUI from '../../components/CourseUI/CourseUI'

const PageUk = ({setUnderLine}) => {
    setUnderLine('uk')
    return (
        <div className=''>
            <div className="UnitopHeader ">
                <img src={'https://clubrunner.blob.core.windows.net/00000010506/Carousels/dynamic-carousel/houston-skyline-1600x400.jpg'} alt="" />
               
            </div>

            <div className="backgroundUi">

<div className="uniHeader">
   <h1>Study in UK</h1>
   <p>UK is a Premier destination for international students owing to its strong .</p>
</div>
<CourseUI/>
</div>

            <div className="uniContainer">

                <div className="uniContainBox">
                    <h1>WHY STUDY IN UK?</h1>
                    <div>
                        <FaCheckCircle/>
                        <p> Ranked no 1 for overall quality of education</p>
                    </div>
                    <div>
                        <FaCheckCircle/>
                        <p> Numerous Study Choices</p>
                    </div>
                    <div>
                        <FaCheckCircle/>
                        <p> Merit based university assistance provided</p>
                    </div>
                    <div>
                        <FaCheckCircle/>
                        <p> Internationally recognised</p>
                    </div>
                </div>
                {/* <div className="uniContainBox">
                    <h1>Tuition Fee and Other Expenses</h1>
                    <div>
                        <FaCheckCircle/> 
                        <p> Education in the USA can be an expensive affair; however this investment is completely worth it.</p>
                    </div>
                    <div>
                        <FaCheckCircle/>
                        <p> The tuition fee can cost anywhere from $8000 to $50, 000 per year</p>
                    </div>
                   
                </div> */}
                {/* <div className="uniContainBox">
                    <h1>COST OF STUDYING</h1>
                    <div>
                        <FaCheckCircle/>
                        <p> Average tuition fees per year range from $15,000 to $25,000 (Private Institutions) and $10,000 to $20,000 (State Institutions)</p>
                    </div>
                    
                   
                </div> */}
            </div>

        </div>
    )
}

export default PageUk