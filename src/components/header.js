import PropTypes from 'prop-types';
import Button from './button';

const Header =(props)=> {
    return (
        <div className='header'>
           <h1>Task Tracker</h1>
           <Button onclick={props.onAdd} color={props.showAdd ? 'Red' : 'Green'} text={props.showAdd ? 'Close' : 'Add'}/>
        </div>
    )
}

Header.propTypes={
    title: PropTypes.string.isRequired,
}


Header.defaultProps={
    title:'Sachit',
}

export default Header;