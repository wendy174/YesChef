class RecipesController < ApplicationController

    # READ all recipes
    get "/recipes" do
        recipes = Recipe.all
        recipes.to_json
    end

    # finding recipe by id to UPDATE and DELETE
    get "/recipes/:id" do
        recipe = Recipe.find(params[:id])
        recipe.to_json(include: [:kisses, :comments])
    end

    # finding recipe by id and including comments to CREATE and READ
    get "/recipes/:id/comments" do
        recipe = Recipe.find(params[:id])
        recipe.to_json(include: :comments)
    end

    # finding recipe by id and including kisses to CREATE and READ and DELETE
    get "/recipes/:id/kisses" do
        recipe = Recipe.find(params[:id])
        recipe.to_json(include: :kisses)
    end

end