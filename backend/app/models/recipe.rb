class Recipe < ActiveRecord::Base
    belongs_to :user
    has_many :comments
    has_many :kisses

    def kiss_count
        self.kisses.count
    end

    def self.top_five_kiss_count
        kisses = self.all.sort_by do |recipe|
            recipe.kiss_count
        end
        kisses.reverse.first(5)
    end

    def self.most_kissed
        self.all.max_by do |recipe|
            recipe.kisses.count
        end
    end
end