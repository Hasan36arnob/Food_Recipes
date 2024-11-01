import { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../components/recipe-list";
import { Search, ChefHat, Loader2 } from "lucide-react";

export default function Home() {
  const { recipeList, loading } = useContext(GlobalContext);

  // Skeleton loader for loading state
  const LoadingSkeleton = () => (
    <div className="w-full flex flex-col items-center gap-8 p-8">
      <div className="animate-spin">
        <Loader2 className="w-12 h-12 text-orange-500" />
      </div>
      <p className="text-orange-600 font-medium animate-pulse">
        Discovering delicious recipes for you...
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="bg-white/20 rounded-xl p-4 h-72 animate-pulse"
          >
            <div className="bg-orange-200/30 h-40 rounded-lg mb-4"></div>
            <div className="bg-orange-200/30 h-6 rounded w-3/4 mb-2"></div>
            <div className="bg-orange-200/30 h-4 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    </div>
  );

  // Empty state component
  const EmptyState = () => (
    <div className="flex flex-col items-center justify-center gap-6 p-12 text-center">
      <ChefHat className="w-24 h-24 text-orange-600 animate-bounce" />
      <h2 className="lg:text-4xl text-2xl font-bold text-orange-900">
        Ready to discover amazing recipes?
      </h2>
      <p className="text-lg text-orange-800 max-w-2xl">
        Search for your favorite food items (e.g., mango, banana, chicken) and
        explore delicious recipes from around the world!
      </p>
      <div className="flex items-center gap-2 text-orange-700 bg-white/20 p-4 rounded-lg">
        <Search className="w-5 h-5" />
        <p className="font-medium">
          Try searching for "chocolate cake" or "grilled salmon"
        </p>
      </div>
    </div>
  );

  // Main container with gradient background and glass effect
  return (
    <div className=" h-screen w-full   bg-gradient-to-br from-orange-300 via-yellow-400 to-orange-300">
      <div className="container mx-auto px-4 py-8">
        {/* Header section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-900 mb-4">
            Recipe Explorer
          </h1>
          <p className="text-orange-700 text-lg max-w-2xl mx-auto">
            Discover and create amazing dishes with our collection of recipes
          </p>
        </div>

        {/* Content section with glass morphism effect */}
        <div className="backdrop-blur-sm bg-white/30 rounded-2xl shadow-xl border border-white/40 overflow-hidden">
          {loading ? (
            <LoadingSkeleton />
          ) : (
            <div className="p-6">
              {recipeList && recipeList.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fadeIn">
                  {recipeList.map((item) => (
                    <div
                      key={item.id}
                      className="transform hover:scale-105 transition-transform duration-300"
                    >
                      <RecipeItem item={item} />
                    </div>
                  ))}
                </div>
              ) : (
                <EmptyState />
              )}
            </div>
          )}
        </div>

        {/* Footer section */}
        {recipeList && recipeList.length > 0 && (
          <div className="text-center mt-8 text-orange-700">
            <p>Found {recipeList.length} delicious recipes for you</p>
          </div>
        )}
      </div>
    </div>
  );
}

// Add these keyframes to your global CSS file
const style = document.createElement("style");
style.textContent = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fadeIn {
    animation: fadeIn 0.5s ease-out forwards;
  }
`;
document.head.appendChild(style);
