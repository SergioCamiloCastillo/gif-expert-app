
import React, { useState } from 'react';


export default function useFetchGifs() {
    const [state, setstate] = useState({ data: [], loading: true });
    return state;
}

