class OutlineList < ActiveRecord::Migration[6.1]
  def change
    create_table :outlines do |t|
      t.string :unfilled_portions
      t.string :filled_portions
  end
end
