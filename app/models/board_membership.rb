class BoardMembership < ActiveRecord::Base
  attr_accessible :user_id

  validates :user, :board, :presence => true

  belongs_to :user, :inverse_of => :memberships
  belongs_to :board, :inverse_of => :memberships
end
