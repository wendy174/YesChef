class RecipesController < ApplicationController

    get "/recipes" do
        recipes = Recipe.all
        recipes.to_json
    end

    get "/recipes/:id" do
        recipe = Recipe.find(params[:id])
        recipe.to_json(include: [:kisses, :comments])
    end

end