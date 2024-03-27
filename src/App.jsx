import React from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';
import {DivMain,DivFirst} from './App.styled'
import Form from "./Form";
import Filter from './Filter'
import Render from "./Render"
import { useState } from 'react';
export const Context = React.createContext()
const App=()=>{
    const [good,changeGood] = useState(0)
    const [bad,changeBad] = useState(0)
    const [neutral,changeNeutral] = useState(0)
    const [name,changeName]=useState('')
    const [number,changeNumber]=useState('')
    const [contacts,changeContacts]=useState([])
    const [filter,changeFilter]=useState('')
    const countTotalFeedback=()=>{
        return good+neutral+bad
    }
    const countPositiveFeedbackPercentage=()=>{
        return 100/(good+neutral+bad)*good
    }
    const getName=(e)=>{
        changeName(e.currentTarget.value)
    }
    const getNumber=(e)=>{
        changeNumber(e.currentTarget.value)
    }
    const deleteContact=(indOfEl)=>{
        const updatedContacts=[...contacts]
        updatedContacts.splice(indOfEl,1)
        changeContacts(updatedContacts)
    }
    const setFilterLetter=(filt)=>{
        changeFilter(filt)
    }
    return(
        <Context.Provider value={{good:good,bad:bad,neutral:neutral,name:name,number:number,contacts:contacts,filter:filter,countTotalFeedback:countTotalFeedback,countPositiveFeedbackPercentage:countPositiveFeedbackPercentage,getName:getName,getNumber:getNumber,changeGood:changeGood,changeBad:changeBad,changeNeutral:changeNeutral,setFilterLetter:setFilterLetter,deleteContact:deleteContact,changeContacts:changeContacts}}>
            <div>
                <DivFirst>
                    <Section title="Leave your feedback"><FeedbackOptions/></Section>
                    <Section title="Statistics">{good+neutral+bad>0?(<Statistics/>):(<Notification message="There is no feedback"/>)}</Section>
                </DivFirst>
                <DivMain>
                    <h1>Phonebook</h1>
                    <Form/>
                    <Filter/>
                    <h2>Contacts</h2>
                    <Render/>
                </DivMain>
            </div>
        </Context.Provider>
    )
}
export default App