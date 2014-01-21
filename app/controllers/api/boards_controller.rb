class Api::BoardsController < ApplicationController

  before_filter :require_login

  def index
    @boards = current_user.member_boards.includes([:lists, :members])
    render :json => @boards, :include => [:lists, :members]
  end

  def create
    @board = Board.new(params[:board])
    @board.members << current_user
    @board.admins << current_user
    if @board.save
      render :json => @board
    else
      render :json => @board.errors.full_messages
    end
  end

  def show
    @board = Board.includes(:lists).find_by_id(params[:id])
    if @board && is_member?(@board, current_user)
      render :json => @board, :include => :lists
    else
      render :text => "404 Not Found", :status => 404
    end
  end

  def update
    @board = Board.includes(:lists).find_by_id(params[:id])
    if @board && is_admin?(@board, current_user)
      if @board.update_attributes(params[:board])
        render :json => @board, :include => :lists
      else
        render :json => @board.errors.full_messages
      end
    else
      render :json => "404 Not Found", :status => 404
    end
  end

  def destroy
  end

end
