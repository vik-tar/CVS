import ListItem from "./ListItem"
import ErrorMessage from './ErrorMessage/ErrorMessage'

import { useState } from 'react'

const List = props => {
    const data = props.data

    const [mailPhone, setMailPhone] = useState([])
    
    return (
        <div>
            <div className='ListItem title'>
                <div className='ListItem__id'>ID</div>
                <div className='ListItem__name'>Full Name</div>
                <div className='ListItem__phone'>Phone</div>
                <div className='ListItem__email'>Email</div>
                <div className='ListItem__age'>Age</div>
                <div className='ListItem__income'>Yearly Income</div>
                <div className='ListItem__exp'>Experience</div>
                <div className='ListItem__children'>Has children</div>
                <div className='ListItem__state'>License states</div>
                <div className='ListItem__date'>Expiration date</div>
                <div className='ListItem__license'>License number</div>
                <div className='ListItem__duplicate'>Duplicate with</div>
            </div>
            
        {
            data
            ? data.map(item => item.full_name && item.phone && item.email) 
                ? data.map((item, index) => {
                    let data = {email: item.email, phone: item.phone}
                    let duplicate = []

                    for (let i = 0; i < mailPhone.length ; i++) {
                        if (mailPhone[i].phone === data.phone || mailPhone[i].email === data.email) {
                            duplicate.push(i + 1)
                        }
                    }
                
                    setMailPhone(prev => prev.push(data))   


                    return <ListItem key={index} item={item} id={index} duplicate={duplicate} />
                })
                : <ErrorMessage />
            : <p>Null</p>
        }
        </div>
    )
}

export default List