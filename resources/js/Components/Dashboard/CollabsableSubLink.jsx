import { Link } from '@inertiajs/react';
import React from 'react';

function CollabsableSubLink({ href = '#', name = 'Appname', active = false }) {
    return (
        <Link href={href} className={`pl-5 mx-2 py-3 px-2  ${active ? ' text-accent font-bold hover:text-light' : ''} hover:text-accent duration-200 mb-5`}> {name}</Link>)
}

export default CollabsableSubLink