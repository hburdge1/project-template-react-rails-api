class User < ApplicationRecord
  has_secure_password
  has_many :work_groups
  has_many :responses
  has_many :icebreakers, through: :responses
  validates :username, presence: true, uniqueness: true
end
