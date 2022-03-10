class CreateResponses < ActiveRecord::Migration[6.1]
  def change
    create_table :responses do |t|
      t.integer :user_id
      t.integer :icebreaker_id
      t.string  :response
      t.timestamps
    end
  end
end
