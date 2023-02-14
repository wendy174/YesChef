class KissesController < ApplicationController

    # READ
    get "/kisses/:id" do
        kisses = Kiss.find(params[:id])
        kisses.to_json
    end

end