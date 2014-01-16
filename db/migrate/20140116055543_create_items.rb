class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :body, :null => false
      t.boolean :checked, :default => false
      t.float :position, :null => false
      t.integer :checklist_id, :null => false

      t.timestamps
    end

    add_index :items, [:checklist_id, :position], :unique => true
  end
end
