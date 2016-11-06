class ConversationsController < ApplicationController
  respond_to :json

  def index
    @conversations = current_user.conversations

    render json: @conversations, each_serializer: conversation_serializer, root: "conversations"
  end

  def show
    render json: @conversation, serializer: conversation_serializer, root: "conversation"
  end

  def create
    @conversation = current_user.conversations.create
    render json: @conversation, serializer: conversation_serializer, root: "conversation"
  end

  private

  def conversation_serializer
    ConversationSerializer
  end

end
