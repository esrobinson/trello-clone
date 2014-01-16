class ChangeOrderColumnName < ActiveRecord::Migration
  def change
    rename_column :lists, :order, :position
  end
end
