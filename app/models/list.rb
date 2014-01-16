class List < ActiveRecord::Base
  attr_accessible :name, :position

  validates :name, :board, :position, :presence => true
  belongs_to :board, :inverse_of => :lists
end
