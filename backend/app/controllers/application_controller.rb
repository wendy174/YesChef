class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'

  # gets 5 recipes with the highest kisses/yes chefs
  get "/home" do
    top_five = Recipe.top_five_kiss_count
    top_five.to_json(only: [:title, :image_URL, :cuisine, :time, :difficulty, :steps, :ingredients], include: [:kisses, :comments, :messes])
    # will try to figure out how to include kiss_count as an integer/variable
  end

end
