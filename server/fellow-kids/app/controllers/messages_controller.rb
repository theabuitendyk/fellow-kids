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
    @message = Message.create(message_params)
    render json: @message, serializer: message_serializer, root: "message"
  end

  private

  def message_serializer
    MessageSerializer
  end

  def message_params
    params.require(:message).permit(:user_id, :conversation_id, :original_type, :old_translation, :youth_translation)
  end
end
