class SessionsController < ApplicationController
  def new
    render :new
  end

  def create
    @user = User.find_by_credentials(params[:user])
    if @user
      login!(@user)
      redirect_to boards_url
    else
      flash.now[:notices] = ["Invalid email/password"]
      render :new
    end
  end

  def destroy
    logout!(current_user)
    redirect_to :root
  end
end
