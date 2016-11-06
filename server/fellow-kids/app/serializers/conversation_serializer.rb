class ConversationSerializer < ActiveModel::Serializer
  attributes :id, :last_message, :pubsub_channel

  has_many :users

  def last_message
    object.messages.last
  end
end
