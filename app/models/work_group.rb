class WorkGroup < ApplicationRecord
    belongs_to :user
    has_many :icebreakers
    
end
