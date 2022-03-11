class ResponseSerializer < ActiveModel::Serializer
  attributes :id, :response
  has_one :icebreaker_id
  has_one :user_id
end
