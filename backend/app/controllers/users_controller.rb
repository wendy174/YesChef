class UsersController < ApplicationController

    # READ all users
    get "/users" do
        users = User.all
        users.to_json
    end

    # READ user by id
    get "/users/:id" do
        user = User.find(params[:id])
        user.to_json(include: [:kisses, :messes, recipes: {include: [:comments, :kisses, :messes]}])
    end

    # READ user by id WITH kisses
    get "/users/:id/kisses" do
        user_kisses = Kiss.where(user_id: params[:id])
        user_kisses.to_json(include: :recipe)
    end

    # CREATE: post for creating new user
    post "/users" do
        user = User.create(params)
        user.to_json(include: {recipes: {include: [:comments, :kisses, :messes]}})
    end

end