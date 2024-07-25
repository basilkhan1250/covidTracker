import * as React from 'react';
import GlobalState from './GlobalState';
// import { useEffect, useState } from 'react';
import './custom.css'
import AllCountries from './AllCountries';

export default function InfoPanel({ currentScreen }) {

    if (currentScreen === 0) {
        return <GlobalState />
    }
    else if (currentScreen === 1) {
        return <AllCountries />
    }
    else {
        return <GlobalState />
    }
}
