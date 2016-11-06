class Message < ApplicationRecord
  belongs_to :user
  belongs_to :conversation

  enum original_type: [ :youth, :old ]

  after_save :async_translate

  def async_translate
    return if old_translation.present? && youth_translation.present?

    TranslationWorker.call(id)
  end

  def translate_old!
    return if self.old_translation.blank?

    self.youth_translation = Translator.old_to_youth.translate(self.old_translation.dup)
  end

  def translate_youth!
    return if self.youth_translation.blank?

    self.old_translation = Translator.youth_to_old.translate(self.youth_translation.dup)
  end

  def translate!
    if old_translation.present? && youth_translation.blank?
      translate_old!
    elsif youth_translation.present? && old_translation.blank?
      translate_youth!
    end
  end

  def translate
    translate!
    save
  end

end
