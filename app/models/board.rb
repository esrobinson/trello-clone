class Board < ActiveRecord::Base
  attr_accessible :name, :private

  validates :name, :presence => true
end
