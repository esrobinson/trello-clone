class ChangePositionColumnToFloat < ActiveRecord::Migration
  def change
    change_column :lists, :position, :float
  end
end
