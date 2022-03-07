class Icebreaker < ApplicationRecord
    belongs_to :user
    has_many :responses
end
