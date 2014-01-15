class BoardsController < ApplicationController

  before_filter :require_login

  def index
    @boards = current_user.member_boards
    render :index
  end

  def new
    @board = Board.new()
    render :new
  end

  def create
    @board = Board.new(params[:board])
    @board.members << current_user
    @board.admins << current_user
    if @board.save
      redirect_to board_url(@board)
    else
      flash.now[:notices] = @board.errors.full_messages
      render :new
    end
  end

  def show
    @board = Board.find_by_id(params[:id])
    if @board && is_member?(@board, current_user)
      render :show
    else
      render :text => "404 Not Found", :status => 404
    end
  end

  def edit
    @users = User.all
    @board = Board.find_by_id(params[:id])
    if @board && is_admin?(@board, current_user)
      render :edit
    else
      render :text => "404 Not Found", :status => 404
    end
  end

  def update
    @board = Board.find_by_id(params[:id])
    if @board && is_admin?(@board, current_user)
      if @board.update_attributes(params[:board])
        redirect_to board_url(@board)
      else
        flash.now[:notices] = @board.errors.full_messages
      end
    else
      render :text => "404 Not Found", :status => 404
    end
  end

  def destroy
  end

end
