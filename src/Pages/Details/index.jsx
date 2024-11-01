import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context";

export default function Details() {
  const { id } = useParams();
  const { recipeDetailsData, setrecipeDetailsData } = useContext(GlobalContext);

  useEffect(() => {
    async function getRecipedetails(params) {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const data = await response.json();
      console.log(data);
      if (data?.data) {
        setrecipeDetailsData(data?.data);
      }
    }
    getRecipedetails();
  });

  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10 bg-orange-400">
      <div className="row-start-2 lg:row-start-auto">
        <div className="h-96 overflow-hidden rounded-xl group">
          <img
            src={recipeDetailsData?.recipe?.image_url}
            className="w-full h-full object-cover block transition-transform duration-500 ease-in-out transform hover:scale-110 hover:shadow-lg hover:shadow-black/40 hover:brightness-90"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-sm text-cyan-700 font-medium">
          {recipeDetailsData?.recipe?.publisher}
        </span>
        <h3 className="font-bold text-2xl truncate text-black ">
          {recipeDetailsData?.recipe?.title}
        </h3>
        <div>
          <button className="p-3 px-3 rounded-lg uppercase font-medium tracking-wider mt-3 inline-block shadow-md bg-black text-white">
            Ingredients
          </button>
        </div>
        <div>
          <span className=" text-2xl font-semibold text-black">
            <ul className="flex-flex-col-gap-3">
              {recipeDetailsData?.recipe?.ingredients.map((ingredient) => (
                <li>
                  <span className="text-sm text-cyan-700 font-medium">
                    {ingredient.quantity} {ingredient.unit}
                  </span>
                  <span className="text-sm text-cyan-700 font-medium">
                    {ingredient.description}
                  </span>
                </li>
              ))}
            </ul>
          </span>
        </div>
      </div>
    </div>
  );
}
