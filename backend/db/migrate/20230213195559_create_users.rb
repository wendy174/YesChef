class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.text :user_name
      t.text :first_name
      t.text :last_name
      t.text :email
      t.text :password
      t.text :image_URL
    end
  end
end
