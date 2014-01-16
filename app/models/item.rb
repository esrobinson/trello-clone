class Item < ActiveRecord::Base
  attr_accessible :body, :checked, :position

  validates :body, :position, :checklist, :presence => true
  belongs_to :checklist, :inverse_of => :items
end
