class CreateRecipes < ActiveRecord::Migration[6.1]
  def change
    create_table :recipes do |t|
      t.text :title
      t.text :image_URL
      t.text :ingredients
      t.text :steps
      t.text :cuisine
      t.integer :time
      t.text :difficulty
      t.integer :user_id
    end
  end
end
