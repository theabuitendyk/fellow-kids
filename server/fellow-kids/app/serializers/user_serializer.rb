class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :type

  def type
    object.birth_year < 20.years.ago.year ? 'old' : 'youth'
  end

end
