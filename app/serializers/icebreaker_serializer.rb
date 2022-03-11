class IcebreakerSerializer < ActiveModel::Serializer
  attributes :id, :content, :flames, :category, :tags, :favorite
  has_many :responses

end
