class User < ActiveRecord::Base
  attr_accessible :avatar, :email, :name, :password, :username
  attr_reader :password

  validates :email, :username, :password_digest, :presence => true
  validates :password, :length => { :minimum => 6 }, :allow_nil => true

  before_validation :on => :create, :reset_session_token

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def find_by_credentials(params)
    user = User.find_by_username(params[:username])
    return user if user && user.is_password?(params[:password])
    nil
  end

  def reset_session_token
    self.session_token = SecureRandom.urlsafe_base64
  end

  def reset_session_token
    self.reset_session_token
    self.save!
  end
end
