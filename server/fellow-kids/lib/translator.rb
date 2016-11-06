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
      str.gsub!(/\b#{key}\b/, value)
    end

    str
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
