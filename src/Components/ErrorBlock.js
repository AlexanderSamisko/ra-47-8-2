import useJsonFetch from '../Hooks/useJsonFetch';
import React from 'react';

export default function ErrorBlock({url, opts}) {
    // defaultProps = {
    //     opts: null
    // };

    const [data, loading, error] = useJsonFetch(url, opts);

    return <>
    {error && <span> {error.status}</span>}  
    </>
}