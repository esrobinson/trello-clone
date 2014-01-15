class BoardMembershipsController < ApplicationController

  def create
    @board_membership = BoardMembership.new(params[:board_membership])
    @board_membership.board_id = params[:board_id]
    if @board_membership.save
      redirect_to board_url(params[:board_id])
    end
  end

end
