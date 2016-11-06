class Conversation < ApplicationRecord
  has_many :users
  has_many :messages

  def pubsub_channel
    "conversation/#{id}"
  end

end
