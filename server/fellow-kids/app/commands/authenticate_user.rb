class AuthenticateUser
  prepend SimpleCommand

  def initialize(username)
    @username = username
  end

  def call
    JsonWebToken.encode(user_id: user.id) if user
  end

  private

  attr_accessor :username

  def user
    user = User.find_by_username(username)
    return user if user

    errors.add :user_authentication, 'invalid credentials'
    nil
  end
end