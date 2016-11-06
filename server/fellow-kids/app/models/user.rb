class User < ApplicationRecord
  has_secure_password

  has_many :messages
  has_many :conversations, -> { distinct }, through: :messages
end
