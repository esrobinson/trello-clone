class Checklist < ActiveRecord::Base
  attr_accessible :name, :position

  belongs_to :card, :inverse_of => :checklists
end
