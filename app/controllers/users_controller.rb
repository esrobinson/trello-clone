class UsersController < ApplicationController

  def new
    render :new
  end

  def create
    @user = User.new(params[:user])
    if @user.save
      login!(@user)
      redirect_to :root
    else
      flash.now[:notices] = @user.errors.full_messages
      render :new
    end
  end

  def show
    @user = User.find(params[:id])
    render :show
  end

  def edit
    @user = User.find(params[:id])
    render :edit
  end

  def update
    @user = User.find(params[:id])
    if @user.update_attributes(params[:user])
      login!(@user)
      redirect_to :root
    else
      flash.now[:notices] = @user.errors.full_messages
      render :edit
    end
  end

end
