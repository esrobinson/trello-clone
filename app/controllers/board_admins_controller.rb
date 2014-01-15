class BoardAdminsController < ApplicationController

  def create
    @board_admin = BoardAdmin.new(params[:board_admin])
    @board_admin.board_id = params[:board_id]
    if @board_admin.save
      redirect_to board_url(params[:board_id])
    end
  end


end
