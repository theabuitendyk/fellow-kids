class Message < ApplicationRecord
  belongs_to :user
  belongs_to :conversation

  enum original_type: [:youth, :old]
end
