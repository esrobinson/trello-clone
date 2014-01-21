class Api::ChecklistsController < ApplicationController

  def create
    @card = Card.find_by_id(params[:card_id])
    @checklist = Checklist.new(params[:checklist])
    @checklist.card = @card
    @checklist.position = @card.checklists.length
    if @checklist.save
      render :json => @checklist
    else
      render :json => @checklist.errors.full_messages
    end
  end

  def show
    @checklist = Checklist.find_by_id(params[:id])
    if @checklist
      render :json => @checklist, :include => :items
    else
      render :json => "404 Not Found", :status => 404
    end
  end

  def update
    @checklist = Checklist.find_by_id(params[:id])
    if @checklist.update_attributes(params[:checklist])
      render :json => @checklist, :include => :items
    else
      render :json => @checklist.errors.full_messages
    end
  end


  def destroy
  end
end
