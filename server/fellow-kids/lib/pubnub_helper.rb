class PubnubHelper

  class << self

    def pubnub
      @pubnub = Pubnub.new(
        publish_key: ENV['PUBNUB_PUBLISH_KEY'],
        subscribe_key: ENV['PUBNUB_SUBSCRIBE_KEY']
      )
    end

    def subscribe(channel)
      pubnub.subscribe(channels: channel)
    end

    def publish(channel, message)
      if block_given?
        pubnub.publish(channel: channel, message: message)
      else
        pubnub.publish(channel: channel, message: message) do |envelope|
          yield envelope
        end
      end
    end

  end

end
