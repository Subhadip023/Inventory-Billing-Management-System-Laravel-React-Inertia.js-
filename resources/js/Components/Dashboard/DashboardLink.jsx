import { Link } from '@inertiajs/react'
import React from 'react'

function DashboardLink({
    href = '#',
    name = 'Appname',
    active=false,
}) {
    return (
        <Link href={href} className={`pl-5 mx-2 py-3 px-2 text-xl font-bold ${active?'bg-dark text-accent':''} hover:bg-dark hover:text-accent duration-200 mb-5`}> {name}</Link>
    )
}

export default DashboardLink