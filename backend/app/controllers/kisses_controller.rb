class KissesController < ApplicationController

    # READ all kisses
    get "/kisses" do
        kisses = Kiss.all
        kisses.to_json
    end

    # READ kiss by id
    get "/kisses/:id" do
        kisses = Kiss.find(params[:id])
        kisses.to_json
    end

    # CREATE: post for creating new kiss
    post "/kisses" do
        kiss = Kiss.create(params)
        kiss.to_json
    end

    # DELETE: delete for deleting/removing a kiss
    delete "/kisses/:id" do
        kiss = Kiss.find(params[:id])
        kiss.destroy
        kiss.to_json
    end

end