import {FC} from 'react'

interface Props{
    handleSubmit:any,
    handleChange:any
}

export const SearchBar:FC<Props> = ({handleSubmit, handleChange}) => {
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange}/>
            <button type="submit">Buscar</button>
        </form>
    )
}
