class CreateIcebreakers < ActiveRecord::Migration[6.1]
  def change
    create_table :icebreakers do |t|
      t.belongs_to :user, foreign_key: true
      t.string :content
      t.boolean :filled
      t.string :tags
      t.timestamps
    end
  end
end
