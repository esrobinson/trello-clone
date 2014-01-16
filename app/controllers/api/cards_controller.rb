class Api::CardsController < ApplicationController

  before_filter :require_login

  def create
    @card = Card.new(params[:card])
    @list = List.find_by_id(params[:list_id])
    @card.list = @list
    @card.position = @list.cards.length
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
    cards = @card.list.cards
    new_position = params[:card][:position].to_i
    if new_position == 0
      position_value = cards[0].position - 1
    elsif new_position == cards.length - 1
      position_value = (cards.length + cards[new_position].position) / 2
    else
      position_value == (cards[new_position - 1].position +
                         cards[new_position].position) / 2
    end
    params[:card][:position] = position_value
    if @card.update_attributes(params[:card])
      render :json => @card, :include => [:comments, :checklists]
    else
      render :json => @card.errors.full_messages
    end
  end

  def destroy
  end
end
