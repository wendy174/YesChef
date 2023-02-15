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
end