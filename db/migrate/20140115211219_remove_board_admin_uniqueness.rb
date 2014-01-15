class RemoveBoardAdminUniqueness < ActiveRecord::Migration
  def change
    remove_index :board_admins, :board_id
    add_index :board_admins, :board_id
  end
end
