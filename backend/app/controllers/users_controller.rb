class UsersController < ApplicationController

    # READ all users
    get "/users" do
        users = User.all
        users.to_json
    end
    # READ user by id
    get "/users/:id" do
        user = User.find(params[:id])
        user.to_json(include: {recipes: {include: [:comments, :kisses, :messes]}})
    end
end