import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchCocktail} from "../redux/action";
import { Link } from "react-router-dom";


    const CockTailList = () => {


        const {cocktails, loading} = useSelector((state) => ({...state.data}));
        const [modifiedCocktail, setModifiedCocktail] = useState([]);
        let dispatch = useDispatch();

        useEffect(() => {
          dispatch(fetchCocktail())
            if (cocktails) {
                const newCocktails = cocktails.map((item) => {
                    const {idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass} = item;
                    return {
                        id: idDrink,
                        name: strDrink,
                        image: strDrinkThumb,
                        info: strAlcoholic,
                        glass: strGlass
                    }
                })
                setModifiedCocktail(newCocktails)
            } else {
                setModifiedCocktail([]);
            }
        }, [cocktails]);

        if(loading) {
            <div className="spinner-grow" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        }

        useEffect(() => {

        })
    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {modifiedCocktail.map((item) => {
                    const {id, name, image, glass, info} = item;
                    return (
                        <div className="col" key="id">
                            <div className="card">

                                <img src={image} alt={name} className="card-img-top"/>
                                <div className="card-body" style={{textAlign: "left"}}>
                                <h5 className="card-title">{name}</h5>
                                <h4 className="card-title">{glass}</h4>
                                <p className="card-text">{info}</p>
                                <Link to={`/cocktail/${id}`}>
                                <button className="btn-details">Details</button>
                                </Link>
                                </div>
                         </div>
                    </div>
                    )
                })}
            </div>         
        </div>
    ); 
}

export default CockTailList
