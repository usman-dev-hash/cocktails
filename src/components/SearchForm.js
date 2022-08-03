import React, {useRef} from "react";
import {useGlobalContext} from "../context";

const SearchForm = () => {

    const { setSearchTerm } = useGlobalContext();
    const searchValue = useRef('')

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    React.useEffect(()=>{
        searchValue.current.focus()
    }, [])

    const searchCocktail = () => {
        setSearchTerm(searchValue.current.value)
    }

    return (
        <section className={'section search'}>
            <form className={'search-form'} onChange={handleSubmit}>
                <div className={'form-control'}>
                    <label htmlFor={'name'}>search your favourite cocktail</label>
                    <input type={'text'} id={'name'} ref={searchValue} onChange={searchCocktail} />
                </div>
            </form>
        </section>
    )
}

export default SearchForm