import React from 'react';
import { BrowseConatiner } from '../containers/browse';
import { useContent } from '../hooks';
import slectionFilter from '../utils/selection-filter';
export default function Browse() {

    const {series} =useContent('series');
    const {films} =useContent('films');
    const slides = slectionFilter({series,films});
    
    return <BrowseConatiner slides={slides}/>;
}