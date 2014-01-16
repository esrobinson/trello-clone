class Card < ActiveRecord::Base
  attr_accessible :archived, :description, :due_date, :list_id, :name, :position
end
