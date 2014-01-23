class Api::CardsController < ApplicationController

  before_filter :require_login

  def create
    @card = Card.new(params[:card])
    @list = List.find_by_id(params[:list_id])
    @card.list = @list
    @card.position = @list.cards.last.position + 1
    if @card.save
      render :json => @card
    else
      render :json => @card.errors.full_messages
    end
  end

  def show
    @card = Card.find_by_id(params[:id])
    if @card
      render :json => @card, :include => [:comments, :checklists]
    else
      render :json => "404 Not Found", :status => 404
    end
  end

  def update
    @card = Card.find_by_id(params[:id])
    if @card.update_attributes(params[:card])
      render :json => @card, :include => [:comments, :checklists]
    else
      render :json => @card.errors.full_messages
    end
  end

  def destroy
  end
end
