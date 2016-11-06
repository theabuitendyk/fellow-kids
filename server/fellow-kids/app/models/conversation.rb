class Conversation < ApplicationRecord
  has_many :messages
  has_many :users, -> { distinct }, through: :messages
end
