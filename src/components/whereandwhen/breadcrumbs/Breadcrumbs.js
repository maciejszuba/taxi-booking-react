import React from 'react'
import BreadcrumbsElement from './BreadcrumbsElement';

const Breadcrumbs = () => {
    return (
        <ul className = 'breadcrumbs'>
            <li><BreadcrumbsElement number = {'1'} name = {'Where & When'}/></li>
            <li><BreadcrumbsElement number = {'2'} name = {'Choose a Car'}/></li>
            <li><BreadcrumbsElement number = {'3'} name = {'Details & Payment'}/></li>
        </ul>
    )
}


export default Breadcrumbs;
