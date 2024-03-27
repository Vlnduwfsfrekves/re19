import { useContext } from "react"
import { Context } from './App';
const Statistics=()=>{
    const contextObj=useContext(Context)
    return(
        <ul>
          <li>Good: {contextObj.good}</li>
          <li>Bad: {contextObj.bad}</li>
          <li>Neutral: {contextObj.neutral}</li>
          <li>Total: {contextObj.countTotalFeedback()}</li>
          <li>Positive feedback: {contextObj.countPositiveFeedbackPercentage()}%</li>
        </ul>
    )
}  
export default Statistics