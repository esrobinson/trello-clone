class List < ActiveRecord::Base
  attr_accessible :name, :order

  validates :name, :board, :order, :presence => true
  belongs_to :board, :inverse_of => :lists
end
