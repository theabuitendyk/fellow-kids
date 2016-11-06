class TranslationWorker
  include Sidekiq::Worker

  def perform(message_id)
    message = Message.find(message_id)

    message.translate!

    message.save
  end

  def self.call(message_id)
    if SYNCHRONOUS_SIDEKIQ
      TranslationWorker.new.perform(message_id)
    else
      TranslationWorker.perform_async(message_id)
    end
  end

end
