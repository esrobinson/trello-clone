class Item < ActiveRecord::Base
  attr_accessible :body, :checked, :position

  validates :body, :position, :checklist, :presence => true
end
