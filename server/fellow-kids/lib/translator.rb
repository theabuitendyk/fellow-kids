class Translator

  def initialize(from_lang, to_lang)
    @from = from_lang
    @to = to_lang
    @replacement_data = self.class.read_replacement_data(@from, @to)
  end

  def translate(str)
    str = simple_replacements(str)

    str
  end

  def simple_replacements(str)
    return str if @replacement_data.empty?

    @replacement_data.each_pair do |key, value|
      sub_val = if value.is_a?(Array)
        value.sample
      else
        value
      end
      str.gsub!(/\b#{key}\b/i, sub_val)
    end

    str
  end

  def in_need_of_translation
    array = []

    @replacement_data.each_pair do |key, value|
      array << key if key == value
    end

    array
  end

  class << self

    def old_to_youth
      @old_to_youth = Translator.new(:old, :youth)
    end

    def youth_to_old
      @youth_to_old = Translator.new(:youth, :old)
    end

    def read_replacement_data(from_lang, to_lang)
      filename = "#{Rails.root}/translations/#{from_lang}/#{to_lang}/replacements.yml"
      file_data = File.file?(filename) ? YAML::load(File.open(filename)) : {}
      file_data['replacements']
    end

  end

end
