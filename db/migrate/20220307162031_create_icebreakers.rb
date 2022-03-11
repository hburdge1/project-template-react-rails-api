class CreateIcebreakers < ActiveRecord::Migration[6.1]
  def change
    create_table :icebreakers do |t|
      t.string :content
      t.string :tags
      t.integer :flames
      t.boolean :favorite
      t.string  :category
      t.timestamps
    end
  end
end
