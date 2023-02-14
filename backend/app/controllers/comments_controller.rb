class CommentsController < ApplicationController

    # READ
    get "/comments/:id" do
        comments = Comment.find(params[:id])
        comments.to_json
    end

end
