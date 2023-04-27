import { useRouter } from 'next/router'
import React from 'react'

const edit = () => {
    const router = useRouter();
    const { id } = router.query
    return (
        <div>edit {id}</div>
    )
}

export default edit;