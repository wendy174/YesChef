class User < ActiveRecord::Base
    has_many :recipes
    has_many :comments
    has_many :kisses
    has_many :messes
end