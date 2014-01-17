class List < ActiveRecord::Base
  attr_accessible :name, :position

  validates :name, :board, :position, :presence => true
  belongs_to :board, :inverse_of => :lists
  has_many :cards, :order => "position ASC", :inverse_of => :list
end
