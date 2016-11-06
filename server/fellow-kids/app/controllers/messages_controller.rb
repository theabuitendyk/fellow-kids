class MessagesController < ApplicationController
  def index
    conversation = Conversation.find_by(id: request.headers["HTTP_CONVERSATION_ID"])
    @messages = conversation.messages

    render json: @messages, each_serializer: message_serializer, root: "messages"
  end

  def show
    @message = Message.find(params[:id])
    render json: @message, serializer: message_serializer, root: "message"
  end

  def create
    @message = create_message
    render json: @message, serializer: message_serializer, root: "message"
  end

  private

  def message_serializer
    MessageSerializer
  end

  def create_message
    Message.create(
      user: current_user,
      conversation_id: request.headers["HTTP_CONVERSATION_ID"],
      original_type: request.headers["HTTP_ORIGINAL_TYPE"],
      youth_translation: request.headers["HTTP_YOUTH_TRANSLATION"],
      old_translation: request.headers["HTTP_OLD_TRANSLATION"]
    )
  end
end
