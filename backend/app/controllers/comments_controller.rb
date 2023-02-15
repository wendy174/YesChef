class CommentsController < ApplicationController


    # READ all comments
    get "/comments" do
        comments = Comment.all
        comments.to_json
    end

    # READ comment by id
    get "/comments/:id" do
        comments = Comment.find(params[:id])
        comments.to_json
    end

    # CREATE new comment
    post "/comments" do
        comment = Comment.create(params)
        comment.to_json
    end

    # DELETE comment by id
    delete "/comments/:id" do
        comment = Comment.find(params[:id])
        comment.destroy
        comment.to_json
    end
end
