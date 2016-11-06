require 'sidekiq'
require 'sidekiq/api'

Sidekiq.configure_client do |config|
  if ENV['REDIS_URL'].present?
    db = ENV['REDIS_DB'].present? ? ENV['REDIS_DB'] : '3'
    url = "#{ENV['REDIS_URL']}/#{db}"
    config.redis = { url: url }
  end
end


Sidekiq.configure_server do |config|
  if ENV['REDIS_URL'].present?
    db = ENV['REDIS_DB'].present? ? ENV['REDIS_DB'] : '3'
    url = "#{ENV['REDIS_URL']}/#{db}"
    config.redis = { url: url }
  end
end

SYNCHRONOUS_SIDEKIQ = if ENV['SYNCHRONOUS_SIDEKIQ'].blank?
  ENV['ENV'].present? && !Rails.env.test? && (ENV['ENV'] == "STAGING" || ENV['ENV'] == "DEVELOPMENT")
else
  ['false', '0'].include?(ENV['SYNCHRONOUS_SIDEKIQ']) ? false : true
end
