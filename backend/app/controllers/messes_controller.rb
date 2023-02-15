class MessesController < ApplicationController

    # READ all messes
    get "/messes" do
        messes = Mess.all
        messes.to_json
    end

    # READ mess by id
    get "/messes/:id" do
        messes = Mess.find(params[:id])
        messes.to_json
    end

    # CREATE: post for creating new mess
    post "/messes" do
        mess = Mess.create(params)
        mess.to_json
    end

    # DELETE: delete for deleting/removing a mess
    delete "/messes/:id" do
        mess = Mess.find(params[:id])
        mess.destroy
        mess.to_json
    end

end