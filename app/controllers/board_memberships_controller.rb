class BoardMembershipsController < ApplicationController

  def create
    @board = Board.find_by_id(params[:board_id])
    if @board && is_admin?(@board, current_user)
      @board_membership = BoardMembership.new(params[:board_membership])
      @board_membership.board_id = params[:board_id]
      if @board_membership.save
        redirect_to board_url(params[:board_id])
      end
    else
      render :text => "404 Not Found", :status => 404
    end
  end

end
