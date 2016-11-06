class UserController < ApplicationController
  respond_to :json

  def index
    conversation = Conversation.find_by(id: params[:conversation_id])
    @users = conversation.users

    render json: @users, each_serializer: user_serializer, root: "users"
  end

  def show
    @user = User.find(params[:id])
    render json: @user, serializer: user_serializer, root: "user"
  end

  private

  def user_serializer
    UserSerializer
  end

end
