class IcebreakerSerializer < ActiveModel::Serializer
  attributes :id, :content, :flames, :category, :tags
  has_many :responses

end
