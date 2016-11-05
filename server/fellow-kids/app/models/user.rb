class User < ApplicationRecord
  has_secure_password

  has_many :conversations
  has_many :messages
end
