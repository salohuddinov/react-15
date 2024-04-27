import React, { useRef } from 'react'
import { useGetCategoryQuery } from '../../context/categoryApi'

const Categories = () => {
    let { data, isLoading, isError } = useGetCategoryQuery()
    const title = useRef()

    const handlecreateCategoriy = e => {
        e.preventDefault()
        console.log(title.current.value);
    }


    console.log(data);
    let categories = data?.data?.map((el, inx) => (
        <div key={el.id}>{inx + 1}. {el.title}</div>
    ))
    return (
        <div>
            <h2>Categories</h2>
            <form onSubmit={handlecreateCategoriy} action="">
                <input type="text" />
                <button>Create</button>
            </form>
            {isLoading ? <h2>Loading...</h2> : <></>}

            <div>
                {categories}
            </div>
        </div>
    )
}

export default Categories