class MessageSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :conversation_id, :original_type, :old_translation, :youth_translation, :sent_time, :username

  def sent_time
    object.created_at.to_i
  end

  def username
    object.user.username
  end
end
