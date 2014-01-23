class Board < ActiveRecord::Base
  attr_accessible :name, :private

  validates :name, :presence => true
  has_many :memberships,
           :class_name => "BoardMembership",
           :inverse_of => :board,
           :dependent => :destroy
  has_many :members, :through => :memberships, :source => :user
  has_many :administrations,
           :class_name => "BoardAdmin",
           :inverse_of => :board,
           :dependent => :destroy
  has_many :admins, :through => :administrations, :source => :user
  has_many :lists,
           :order => "position ASC",
           :inverse_of => :board,
           :dependent => :destroy
end
