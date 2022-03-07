class CreateWorkGroups < ActiveRecord::Migration[6.1]
  def change
    create_table :work_groups do |t|
      t.integer :user_id
      t.string :members
      t.timestamps
    end
  end
end
