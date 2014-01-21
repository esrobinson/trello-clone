class Card < ActiveRecord::Base
  attr_accessible :archived, :description, :due_date, :list_id, :name, :position
  validates :list, :name, :presence => true

  belongs_to :list, :inverse_of => :cards
  has_many :comments, :inverse_of => :card
  has_many :checklists, :order => "position ASC", :inverse_of => :card
end
