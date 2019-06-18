import React from 'react';
import Breadcrumbs from './breadcrumbs/Breadcrumbs';
import Update from './bookingform/Update';
import DetailsAndMap from './DetailsAndMap';

const WhereAndWhen = () => {
    return (
        <main className="container first-layout">
            <Breadcrumbs/>
            <Update/>
            <DetailsAndMap/>
        </main>
    )
}

export default WhereAndWhen
