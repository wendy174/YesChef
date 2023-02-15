class Recipe < ActiveRecord::Base
    belongs_to :user
    has_many :comments
    has_many :kisses
    has_many :messes

    # counts kisses/yeses for each recipe
    def kiss_count
        self.kisses.count
    end

    # calculates the top 5 kissed recipes
    def self.top_five_kiss_count
        kisses = self.all.sort_by do |recipe|
            recipe.kiss_count
        end
        kisses.reverse.first(5)
    end

    # calculates the most kissed recipe
    def self.most_kissed
        self.all.max_by do |recipe|
            recipe.kisses.count
        end
    end

    # creates array of all cuisine types
    def self.cuisine_types
        cuisine_types = self.all.map do |recipe|
            recipe.cuisine
        end
        cuisine_types.uniq.sort
    end

    # creates array of all difficulty levels
    def self.difficulty_levels
        difficulty_levels = self.all.map do |recipe|
            recipe.difficulty
        end
        difficulty_levels.uniq
    end

    # creates array of all cooking times
    def self.cooking_times
        cooking_times = self.all.map do |recipe|
            recipe.time
        end
        cooking_times.uniq.sort
    end
end