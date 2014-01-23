class UsersController < ApplicationController

  before_filter :require_login, :only => [:edit, :update]

  def new
    @user = User.new()
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
    @user = User.find_by_id(params[:id])
    if @user
      render :show
    else
      render :text => "404 Not Found", :status => 404
    end

  end

  def edit
    @user = User.find_by_id(params[:id])
    if @user && @user.id == current_user.id
      render :edit
    else
      render :text => "404 Not Found", :status => 404
    end
  end

  def update
    @user = User.find_by_id(params[:id])
    if @user.update_attributes(params[:user])
      login!(@user)
      redirect_to :root
    else
      flash.now[:notices] = @user.errors.full_messages
      render :edit
    end
  end

end
