import { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../components/recipe-list";

export default function Home() {
  const { recipeList, loading } = useContext(GlobalContext);
  if (loading) return <div>Loading ....... please Wait</div>;

  return (
    <div className="py-12 container mx-auto flex flex-wrap justify-center gap-8 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 text-white shadow-lg rounded-xl">
 
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => <RecipeItem item={item} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">Nothing to show .. please search something (e.g. mango , banana....)</p>
        </div>
      )}
    </div>
  );
}
