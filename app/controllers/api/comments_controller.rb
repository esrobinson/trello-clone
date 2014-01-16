class Api::CommentsController < ApplicationController

  def create
    @comment = Comment.new(params[:comment])
    @comment.card = Card.find_by_id(params[:card_id])
    @comment.user = current_user
    if @comment.save
      render :json => @comment.card, :include => [:checklists, :comments]
    else
      render :json => @comment.errors.full_messages
    end
  end

end
