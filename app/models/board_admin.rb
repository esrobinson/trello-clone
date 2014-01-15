class BoardAdmin < ActiveRecord::Base
  attr_accessible :user_id

  validates :board, :user, :presence => true

  belongs_to :user, :inverse_of => :administrations
  belongs_to :board, :inverse_of => :administrations

end
