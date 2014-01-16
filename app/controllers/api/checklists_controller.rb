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
    checklists = @checklist.card.checklists
    new_position = params[:checklist][:position].to_i
    if new_position == 0
      position_value = checklists[0].position - 1
    elsif new_position == checklists.length - 1
      position_value = (checklists.length + checklists[new_position].position) / 2
    else
      position_value == (checklists[new_position - 1].position +
                         checklists[new_position].position) / 2
    end
    params[:checklist][:position] = position_value
    if @checklist.update_attributes(params[:checklist])
      render :json => @checklist, :include => :items
    else
      render :json => @checklist.errors.full_messages
    end
  end


  def destroy
  end
end
