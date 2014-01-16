class Comment < ActiveRecord::Base
  attr_accessible :body, :card_id, :user_id
  validates :body, :card, :user, :presence => true

  belongs_to :user
  belongs_to :card, :inverse_of => :comments
end
