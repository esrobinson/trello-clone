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
    if @board.save
      redirect_to board_url(@board)
    else
      flash.now[:notices] = @board.errors.full_messages
      render :new
    end
  end

  def show
    @board = Board.find_by_id(params[:id])
    if @board && is_member?(@board)
      render :show
    else
      render :text => "404 Not Found", :status => 404
    end
  end

  def edit

  end

  def update
  end

  def destroy
  end

end
