class Words < ActiveRecord::Migration[6.1]
  def change
    create_table :words do |t|
    t.string :word
    t.string :part_of_speech
    t.string :category
    t.timestamps
    end
  end
end
