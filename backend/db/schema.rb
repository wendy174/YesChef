# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2023_02_15_165353) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.text "comment"
    t.integer "user_id"
    t.integer "recipe_id"
  end

  create_table "kisses", force: :cascade do |t|
    t.integer "user_id"
    t.integer "recipe_id"
  end

  create_table "messes", force: :cascade do |t|
    t.integer "user_id"
    t.integer "recipe_id"
  end

  create_table "recipes", force: :cascade do |t|
    t.text "title"
    t.text "image_URL"
    t.text "ingredients"
    t.text "steps"
    t.text "cuisine"
    t.integer "time"
    t.text "difficulty"
    t.integer "user_id"
  end

  create_table "users", force: :cascade do |t|
    t.text "user_name"
    t.text "first_name"
    t.text "last_name"
    t.text "email"
    t.text "password"
    t.text "image_URL"
  end

end
