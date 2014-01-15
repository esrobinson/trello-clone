class CreateBoardMemberships < ActiveRecord::Migration
  def change
    create_table :board_memberships do |t|
      t.integer :user_id
      t.integer :board_id

      t.timestamps
    end

    add_index :board_memberships, [:user_id, :board_id], :unique => true
    add_index :board_memberships, :board_id
  end
end
