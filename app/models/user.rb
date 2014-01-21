class User < ActiveRecord::Base
  include Gravtastic
  gravtastic :size => 30, :default => "identicon"

  attr_accessible :avatar, :email, :name, :password, :username
  attr_reader :password

  validates :email, :username, :password_digest, :presence => true
  validates :password, :length => { :minimum => 6 }, :on => :create
  validates :email, :uniqueness => true

  before_validation  :reset_session_token, :on => :create

  has_many :memberships, :class_name => "BoardMembership", :inverse_of => :user
  has_many :member_boards, :through => :memberships, :source => :board
  has_many :administrations, :class_name => "BoardAdmin", :inverse_of => :user
  has_many :administered_boards, :through => :administrations, :source => :board

  def self.find_by_credentials(params)
    user = User.find_by_email(params[:email])
    return user if user && user.is_password?(params[:password])
    nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token
    self.session_token = SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.reset_session_token
    self.save!
  end
end
