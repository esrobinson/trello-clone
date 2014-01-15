class CreateBoards < ActiveRecord::Migration
  def change
    create_table :boards do |t|
      t.string :name, :null => false
      t.boolean :private, :null => false

      t.timestamps
    end
  end
end
