class Card < ActiveRecord::Base
  attr_accessible :archived, :description, :due_date, :list_id, :name, :position
  validates :list, :name, :presence => true

  belongs_to :list, :inverse_of => :cards
end
