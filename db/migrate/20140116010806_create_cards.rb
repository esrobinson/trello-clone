class CreateCards < ActiveRecord::Migration
  def change
    create_table :cards do |t|
      t.string :name, :null => false
      t.string :description
      t.date :due_date
      t.boolean :archived, :default => false
      t.integer :list_id, :null => false
      t.float :position, :null => false

      t.timestamps
    end

    add_index :cards, [:list_id, :position], :unique => true
  end
end
