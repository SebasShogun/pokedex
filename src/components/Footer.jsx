import React from 'react'

const Footer = () => {
    const getYear = () => {
        let currentYear = new Date().getFullYear();
        return currentYear;
    }
    return (
        <footer>
            &copy; {getYear()} - Sebastián Fonseca Flores
        </footer>
    )
}

export default Footer
