import useJsonFetch from '../Hooks/useJsonFetch';
import React from 'react';

export default function DataBlock({url, opts}) {
    // defaultProps = {
    //     opts: null
    // };

    const [data, loading, error] = useJsonFetch(url, opts);

    return <>
    {data && <span> {JSON.stringify(data)} </span>}  
    </>
}