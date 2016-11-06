class ApplicationController < ActionController::API
  include ActionController::MimeResponds

  before_action :set_user
  attr_reader :current_user

  private

  def set_user
    @current_user = User.find_by_username(request.headers["HTTP_USERNAME"])
  end
end
