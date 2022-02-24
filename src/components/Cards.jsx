import React from "react";
import "../css/Cards.css";
import { ReactComponent as NonVeg } from "../img/nonveg.svg";
// import { ReactComponent as Veg } from "../img/veg.png";
const Cards = () => {
    const allRecipes = [
        {
            id: 100,
            recipeName: "Grill Chicken",
            foodType: "NV",
            ingredientsRequired: "Chicken",
            stepsToPrepare: "Chicken 1kg and stearm it",
            recipeImage: {
                url: "https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg",
                altInfo: "Chicken Biryani",
            },
            recipeDescription: "Yummy chicken",
        },
        {
            id: 101,
            recipeName: "Grill Chicken",
            foodType: "NV",
            ingredientsRequired: "Chicken",
            stepsToPrepare: "Chicken 1kg and stearm it",
            recipeImage: {
                url: "https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg",
                altInfo: "Chicken Biryani",
            },
            recipeDescription: "Yummy chicken",
        },
        {
            id: 102,
            recipeName: "Grill Chicken",
            foodType: "NV",
            ingredientsRequired: "Chicken",
            stepsToPrepare: "Chicken 1kg and stearm it",
            recipeImage: {
                url: "https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg",
                altInfo: "Chicken Biryani",
            },
            recipeDescription: "Yummy chicken",
        },
        {
            id: 103,
            recipeName: "Chicken",
            foodType: "NV",
            recipeImage: {
                url: "https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg",
                altInfo: "Chicken Biryani",
            },
            recipeDescription: "Yummy chicken",
        },
        {
            id: 104,
            recipeName: "Grill Chicken",
            foodType: "NV",
            ingredientsRequired: "Chicken",
            stepsToPrepare: "Chicken 1kg and stearm it",
            recipeImage: {
                url: "https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg",
                altInfo: "Chicken Biryani",
            },
            recipeDescription: "Yummy chicken",
        },
        {
            id: 105,
            recipeName: "Grill Chicken",
            foodType: "Veg",
            ingredientsRequired: "Chicken",
            stepsToPrepare: "Chicken 1kg and stearm it",
            recipeImage: {
                url: "https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg",
                altInfo: "Chicken Biryani",
            },
            recipeDescription: "Yummy chicken",
        },
    ];

    return (

        <div className="RecipeCardWrap">
            {
                allRecipes.map((recipes) => {
                    return (
                        <div
                            className="RecipeCard" key={recipes.id}>
                            <div className="CoverImg">
                                <img
                                    src={recipes.recipeImage.url}
                                    alt={recipes.recipeName}
                                    id="card"
                                />
                            </div>
                            <div className="Content">
                                <div className="NameContent">
                                    <p>{recipes.recipeName}</p>

                                    {(recipes.foodType === "Veg") ? (
                                        <NonVeg fill="#00B158" stroke="#00B158" />
                                    ) : (recipes.foodType === "NV") ? (
                                        <NonVeg fill="#a70000" stroke="#a70000" />
                                    ) : (
                                        <p>vala saiyala thu thu</p>
                                    )}


                                </div>
                                <p>{recipes.recipeDescription}</p>
                            </div>
                        </div>
                    );
                })
            }
        </div>


    );
}



export default Cards;

