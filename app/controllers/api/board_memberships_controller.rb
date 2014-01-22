class Api::BoardMembershipsController < ApplicationController

  def create
    @board = Board.find_by_id(params[:board_id])
    if @board && is_admin?(@board, current_user)
      user = User.find_by_username(params[:username])
      @board_membership = BoardMembership.new()
      @board_membership.user = user
      @board_membership.board_id = params[:board_id]
      if @board_membership.save
        render :json => @board_membership
      else
        render :json => @board_membership.errors.full_messages
      end
    else
      render :text => "404 Not Found", :status => 404
    end
  end

end
