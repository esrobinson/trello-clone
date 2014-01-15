module SessionsHelper
  def login!(user)
    session[:session_token] = user.session_token
  end

  def logout!(user)
    session[:session_token] = nil
    user.reset_session_token!
  end

  def current_user
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def require_login
    unless logged_in?
      redirect_to :root
    end
  end
end
