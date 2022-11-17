import React from 'react';
import Button from 'react-bootstrap/Button';
import classes from './Categories.module.css';
import { Link } from 'react-router-dom'


const Categories = () => {

    return (
        <>
            <h2 className={classes.title}>Our products</h2>
            <div className={classes.buttons}>
                <Link to="/bartools"><Button variant="warning" size="lg" style={{ fontWeight: 'bold' }}>Bar Tools</Button></Link>
                <Link to='/packages'><Button variant="warning" size="lg" style={{ fontWeight: 'bold' }}>Packages</Button></Link>
                <Link to='/'><Button variant="warning" size="lg" style={{ fontWeight: 'bold' }}>Cocktails</Button></Link>
            </div>
        </>
    )
}

export default Categories