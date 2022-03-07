class CreatePhrases < ActiveRecord::Migration[6.1]
  def change
    create_table :phrases do |t|
      t.belongs_to :user, foreign_key: true
      t.string :content
      t.timestamps
    end
  end
end
