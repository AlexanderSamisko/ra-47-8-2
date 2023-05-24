import useJsonFetch from '../Hooks/useJsonFetch';
import React from 'react';

export default function LoadingBlock({url, opts}) {

    // defaultProps = {
    //     opts: null
    // };

    const [data, loading, error] = useJsonFetch(url, opts);

    return <>
    {loading && <span> Loading</span>}  
    </>
}