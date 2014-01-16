class Api::BoardAdminsController < ApplicationController

  def create
    @board_admin = BoardAdmin.new(params[:board_admin])
    @board_admin.board_id = params[:board_id]
    if @board_admin.save
      render :json => @board_admin
    end
  end


end
