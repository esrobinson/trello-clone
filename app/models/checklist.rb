class Checklist < ActiveRecord::Base
  attr_accessible :name, :position

  validates :name, :presence => true

  belongs_to :card, :inverse_of => :checklists
  has_many :items, :inverse_of => :checklist
end
