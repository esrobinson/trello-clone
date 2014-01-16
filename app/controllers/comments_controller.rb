class CommentsController < ApplicationController

  def create
    @comment = Comment.new(params[:comment])
    @comment.card = Card.find_by_id(params[:card_id])
    @comment.user = current_user
    if @comment.save
      redirect_to card_url(@comment.card)
    else
      flash[:notices] = @comment.errors.full_messages
      redirect_to card_url(@comment.card)
    end
  end

end
