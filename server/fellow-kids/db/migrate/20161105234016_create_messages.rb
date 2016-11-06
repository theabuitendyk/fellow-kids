class CreateMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :messages do |t|
      t.belongs_to :user, index: true
      t.belongs_to :conversation, index: true
      t.integer :original_type
      t.string :old_translation
      t.string :youth_translation

      t.timestamps
    end
  end
end
