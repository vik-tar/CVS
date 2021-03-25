import is from 'is_js'

const ListItem = props => {
    const duplicate = props.duplicate

    const licence = number => number === /^[a-z0-9]{6}$/

    const age = age => {
        if (typeof age !== 'number') {
            return false
        }

        return age >= 21
    }

    const experience = exp => {
        if (typeof exp !== 'number') {
            return false
        }

        return exp < 21 && exp > 0
    }

    const hasChildren = children => {
        if (typeof children === 'boolean') {
            return true
        }     
        return false 
    }

    const email = email => {
        return is.email(email)
    }

    const date = date => {
        return is.dateString(date)
    }
    
    const phone = phone => phone === /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/

    return (
        <div className='ListItem'>
            <div className='ListItem__id'>{props.id}</div>
            <div className='ListItem__name'>{props.item.full_name}</div>
            <div className={`ListItem__phone ${phone(props.item.phone) ? null : 'incorrect'}`}>{props.item.phone}</div>
            <div className={`ListItem__email ${email(props.item.email) ? null : 'incorrect'}`}>{props.item.email}</div>
            <div className={`ListItem__age ${age(props.item.age) ? null : 'incorrect'}`}>{props.item.age}</div>
            <div className='ListItem__income'>{props.item.yearly_income}</div>
            <div className={`ListItem__exp ${experience(props.item.experience) ? null : 'incorrect'}`}>{props.item.experience}</div>
            <div className={`ListItem__children ${hasChildren(props.item.has_children) ? null : 'incorrect'}`}>{props.item.has_children ? 'True' : 'False'}</div>
            <div className='ListItem__state'>{props.item.license_states}</div>
            <div className={`ListItem__date ${date(props.item.expiration_date) ? null : 'incorrect'}`}>{props.item.expiration_date}</div>
            <div className='ListItem__license'>{licence(props.item.license_number)}</div>
            <div className='ListItem__duplicate'>{[...duplicate].join(' ')}</div>
        </div>
    )
}

export default ListItem