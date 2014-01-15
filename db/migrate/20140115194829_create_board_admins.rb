class CreateBoardAdmins < ActiveRecord::Migration
  def change
    create_table :board_admins do |t|
      t.integer :user_id
      t.integer :board_id

      t.timestamps
    end
    add_index :board_admins, [:user_id, :board_id], :unique => true
    add_index :board_admins, :board_id, :unique => true
  end
end
